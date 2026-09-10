import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { test, expect, type Locator, type Page } from '@playwright/test';
import { workspaceRoot } from '@nx/devkit';
import { Fzf } from 'fzf';

const iconifyVersion = JSON.parse(
  readFileSync(
    join(workspaceRoot, 'node_modules/@iconify/json/package.json'),
    'utf-8',
  ),
).version as string;

/**
 * The e2e server starts `internal-docs:serve`, whose `prepare` dependency
 * materializes the real per-collection meta JSONs before tests run. Derive
 * expected card counts from them instead of hardcoding, so adding/removing
 * collections keeps these tests correct.
 */
type CollectionMeta = {
  id: string;
  name: string;
  category?: string;
  license?: { title?: string };
};
const collectionsDir = join(workspaceRoot, 'apps/docs/public/collections');
const metas = readdirSync(collectionsDir)
  .filter((f) => f.endsWith('-meta.json'))
  .map((f) =>
    JSON.parse(readFileSync(join(collectionsDir, f), 'utf-8')),
  ) as CollectionMeta[];
const totalSets = metas.length;

/**
 * The landing search bar filters collections with the same Fzf instance the
 * app uses (`apps/docs/src/app/data/index.ts`). Replicate its exact
 * configuration and input data so expected counts match the UI deterministically.
 */
const infoJSON = JSON.parse(
  readFileSync(
    join(workspaceRoot, 'apps/docs/src/app/data/collections-info.json'),
    'utf-8',
  ),
) as Array<Record<string, unknown>>;
const fzf = new Fzf(infoJSON, {
  casing: 'case-insensitive',
  fuzzy: 'v2',
  selector: (v) => `${v.name} ${v.id} ${v.category} ${v.author}`,
});
const matchingCollections = (q: string): number => fzf.find(q).length;

/**
 * The landing card for the exact `lucide` collection. Cards are `<a>` links
 * tied to their collection route; match the href instead of the accessible
 * name, because the display name (`Lucide`) is also a prefix of `lucide-lab`.
 */
function lucideCard(page: Page): Locator {
  return page.locator('a.collection-card[href="/collection/lucide"]');
}

/** The first rendered grid cell on a collection page. */
function firstCell(page: Page): Locator {
  return page.locator('main .grid button').first();
}

/**
 * Every landing category block sits inside `@defer (on viewport)` and each
 * card inside it has its own `@defer (on viewport)` too. A single jump to the
 * bottom does not fire the intermediate observers (they only see the final
 * position), so scroll in small steps and keep going while pieces stream in
 * until the target number of cards has rendered. If the coarse pass stalls
 * (common after a search reset re-creates the blocks), sweep from the top with
 * a finer step so every deferred block crosses the viewport.
 */
async function scrollLandingToBottom(
  page: Page,
  expectedCount: number = totalSets,
): Promise<void> {
  const container = page.locator('div.overflow-y-auto.relative.space-y-6');
  const cards = page.locator('.collection-card');

  const scrollWindow = async (
    stepRatio: number,
    waitMs: number,
    maxSteps: number,
  ): Promise<boolean> => {
    let stalled = 0;
    let lastCount = -1;
    for (let i = 0; i < maxSteps; i++) {
      const count = await cards.count();
      if (count >= expectedCount) {
        return true;
      }
      if (count === lastCount) {
        stalled++;
      } else {
        stalled = 0;
        lastCount = count;
      }
      if (stalled >= 5) {
        // IO lost the crossings: nudge the scroll around so the observers
        // re-evaluate the blocks sitting just outside the viewport.
        await container.evaluate((el) => {
          const maxScroll = el.scrollHeight - el.clientHeight;
          el.scrollTop = Math.max(0, el.scrollTop - el.clientHeight * 1.5);
          void maxScroll;
        });
        stalled = 0;
      }
      await container.evaluate((el, ratio) => {
        const step = Math.max(el.clientHeight * ratio, 200);
        const maxScroll = el.scrollHeight - el.clientHeight;
        if (maxScroll <= 0) {
          return;
        }
        el.scrollTop = Math.min(el.scrollTop + step, maxScroll);
      }, stepRatio);
      await page.waitForTimeout(waitMs);
    }
    return (await cards.count()) >= expectedCount;
  };

  if (await scrollWindow(0.7, 180, 50)) {
    return;
  }
  for (let sweep = 0; sweep < 3; sweep++) {
    await container.evaluate((el) => {
      el.scrollTop = 0;
    });
    if (await scrollWindow(0.3, 200, 70)) {
      return;
    }
  }
  await expect(page.locator('.collection-card')).toHaveCount(expectedCount, {
    timeout: 10_000,
  });
}

/**
 * The app uses `withEventReplay` hydration: SSR paints the shell (header,
 * search bar, cards) but Angular attaches handlers only after hydration.
 * Interactions that land before that are replayed, which can drop or race.
 * The reliable post-hydration marker is a client-only fetch result: sample
 * icons on the landing (per-set samples asset) and grid cells on a collection
 * page (set bundle + index). Wait for one of them before interacting.
 */
async function waitForClient(page: Page): Promise<void> {
  await expect(
    page.locator('.collection-card svg, main .grid button').first(),
  ).toBeVisible();
}

/**
 * Clicks a grid cell that must open the detail dialog. Under parallel workers
 * the virtualized grid can recycle a row mid-click and swallow the event, so
 * retry once before failing; a click that landed but rendered slowly still
 * passes the first wait.
 */
async function clickCellOpenDialog(page: Page, cell: Locator): Promise<void> {
  const dialog = page.locator('app-icon-detail-dialog');
  for (let attempt = 0; attempt < 2; attempt++) {
    await cell.click();
    try {
      await expect(dialog).toBeVisible({ timeout: 6000 });
      return;
    } catch {
      if (attempt === 0) {
        await expect(cell).toBeAttached();
      }
    }
  }
  await expect(dialog).toBeVisible();
}

test.describe('Icon Docs Site', () => {
  test('landing shows all collections as cards with sample icons', async ({
    page,
  }) => {
    await page.goto('/');
    await expect(page.locator('#search-input')).toBeVisible();
    await waitForClient(page);
    // The landing groups every manifest set by category; deferred category
    // blocks hydrate as the container scrolls.
    await scrollLandingToBottom(page);
    await expect(page.locator('.collection-card')).toHaveCount(totalSets);
    await expect(lucideCard(page)).toHaveCount(1);
    // Sample icons stream in from the per-set samples asset (post-hydration).
    await expect(page.locator('.collection-card svg').first()).toBeVisible();
  });

  test('clicking a collection opens its browse grid', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.collection-card').first()).toBeVisible();
    await waitForClient(page);
    await lucideCard(page).click();

    await expect(page).toHaveURL(/\/collection\/lucide$/);
    await expect(page.locator('main .grid').first()).toBeVisible();
    await expect(firstCell(page)).toBeVisible();
    // Meta line shows the active set.
    await expect(
      page.locator('p.font-mono.text-sm.text-foreground').first(),
    ).toContainText('Lucide');
  });

  test('deep link to a collection renders its grid', async ({ page }) => {
    await page.goto('/collection/lucide');
    await expect(page.locator('main .grid').first()).toBeVisible();
    await expect(firstCell(page)).toBeVisible();
  });

  test('in-set search filters icons without debounce', async ({ page }) => {
    await page.goto('/collection/lucide');
    await expect(firstCell(page)).toBeVisible();
    await waitForClient(page);

    await page.locator('#search-input').fill('circle-check');

    // Sync filter: the first canonical result is circle-check itself.
    await expect(firstCell(page)).toContainText('circle-check');
  });

  test('clicking an icon opens the detail dialog', async ({ page }) => {
    await page.goto('/collection/lucide');
    await expect(firstCell(page)).toBeVisible();
    await waitForClient(page);
    await page.locator('#search-input').fill('circle-check');
    await expect(firstCell(page)).toContainText('circle-check');

    await clickCellOpenDialog(page, firstCell(page));

    await expect(page.locator('.icon-name')).toContainText('circle-check');
    await expect(page.locator('.icon-meta dd code').first()).toContainText(
      'LucideCircleCheck',
    );
    await expect(
      page.locator('.snippet h3', { hasText: 'Angular Import' }),
    ).toBeVisible();
    await expect(page.locator('button.copy-btn').first()).toBeVisible();
  });

  test('copy button copies the import statement', async ({ page, context }) => {
    const browserName = page.context().browser()?.browserType().name();
    if (browserName === 'chromium') {
      await context.grantPermissions(['clipboard-read', 'clipboard-write']);
    }

    await page.goto('/collection/lucide');
    await expect(firstCell(page)).toBeVisible();
    await waitForClient(page);
    await page.locator('#search-input').fill('circle-check');
    await expect(firstCell(page)).toContainText('circle-check');

    await clickCellOpenDialog(page, firstCell(page));

    const importCopyBtn = page.locator(
      '.snippet:has(h3:has-text("Angular Import")) button.copy-btn',
    );
    await expect(importCopyBtn).toBeVisible();

    if (browserName === 'chromium') {
      await importCopyBtn.click();
      const clipboardText = await page.evaluate(() =>
        navigator.clipboard.readText(),
      );
      expect(clipboardText).toContain(
        "import { LucideCircleCheck } from '@ngxi/lucide';",
      );
    } else {
      await expect(
        page.locator('.snippet:has(h3:has-text("Angular Import")) code'),
      ).toContainText("import { LucideCircleCheck } from '@ngxi/lucide';");
    }
  });

  test('detail dialog shows the canonical name without an alias tag', async ({
    page,
  }) => {
    // The grid exposes canonical icon names only (aliases are not part of the
    // chunk bundles), so opening a canonical icon renders no "Alias of" hint.
    await page.goto('/collection/lucide');
    await expect(firstCell(page)).toBeVisible();
    await waitForClient(page);
    await page.locator('#search-input').fill('circle-check');
    await expect(firstCell(page)).toContainText('circle-check');

    await clickCellOpenDialog(page, firstCell(page));

    await expect(page.locator('.icon-name')).toContainText('circle-check');
    await expect(page.locator('.icon-name')).not.toContainText('Alias of');
  });

  test('category search narrows the landing', async ({ page }) => {
    // Two full landing scrolls (filtered + reset) can take a while.
    test.setTimeout(90_000);
    await page.goto('/');
    // 59 manifest sets ship under the "UI 24px" category; the search bar
    // filters collections with the same Fzf the spec replicates.
    const expected = matchingCollections('UI 24px');
    expect(expected).toBeGreaterThan(0);
    await waitForClient(page);

    await page.locator('#search-input').fill('UI 24px');

    // The search shows a single "Result" category with the filtered cards.
    // Each card is its own deferred block, so scroll to materialize them all.
    await scrollLandingToBottom(page, expected);
    await expect(page.locator('.collection-card')).toHaveCount(expected);
    await expect(lucideCard(page)).toHaveCount(1);

    await page.locator('#search-input').fill('');
    await scrollLandingToBottom(page);
    await expect(page.locator('.collection-card')).toHaveCount(totalSets);
  });

  test('license shows on the collection header', async ({ page }) => {
    await page.goto('/collection/lucide');
    await expect(firstCell(page)).toBeVisible();
    // Lucide ships under the ISC license; the header links to it.
    await expect(page.getByRole('link', { name: 'ISC' })).toBeVisible();
    await expect(
      page.locator('p.font-mono.text-xs.text-muted-foreground').first(),
    ).toContainText('ISC');
  });

  test('landing search filters collections and reports empty results', async ({
    page,
  }) => {
    await page.goto('/');
    await waitForClient(page);

    await page.locator('#search-input').fill('carbon');
    await expect(page.locator('.collection-card').first()).toContainText(
      'Carbon',
    );
    await expect(
      page.locator('.collection-card', { hasText: 'Lucide' }),
    ).toHaveCount(0);

    await page.locator('#search-input').fill('zzzz-no-such-collection');
    await expect(page.locator('.collection-card')).toHaveCount(0);
    await expect(
      page.getByText('There is no result corresponding to your search query.'),
    ).toBeVisible();
  });

  test('install pill copies the install command', async ({ page, context }) => {
    const browserName = page.context().browser()?.browserType().name();
    if (browserName === 'chromium') {
      await context.grantPermissions(['clipboard-read', 'clipboard-write']);
    }

    await page.goto('/collection/lucide');
    await waitForClient(page);
    const pill = page.getByRole('button', { name: /pnpm add/ });
    await expect(pill).toBeVisible();

    if (browserName === 'chromium') {
      await pill.click();
      const clipboardText = await page.evaluate(() =>
        navigator.clipboard.readText(),
      );
      expect(clipboardText).toContain('pnpm add @ngxi/lucide');
      // The pill's copy feedback is icon-only by design (no "copied!" text):
      // the check SVG is the only one containing a <polyline>.
      await expect(pill.locator('polyline')).toBeVisible();
    } else {
      await expect(pill).toContainText('pnpm add @ngxi/lucide');
    }
  });

  test('theme toggle switches between light and dark', async ({ page }) => {
    await page.goto('/');
    await waitForClient(page);
    // The toggle renders exactly one of `[light]`/`[dark]`; the anchored name
    // regex avoids collection cards whose slug/name contains "light" (e.g.
    // `material-symbols-light`, `mdi-light`).
    const toggle = page.getByRole('button', { name: /^\[(light|dark)\]$/ });
    await expect(toggle).toBeVisible();

    // Fresh context: the SSR default is dark. Toggle must flip the html class;
    // auto-retrying assertions tolerate the click being replayed by hydration.
    await expect(page.locator('html')).toHaveClass(/dark/);
    await toggle.click();
    await expect(page.locator('html')).not.toHaveClass(/dark/);
    await toggle.click();
    await expect(page.locator('html')).toHaveClass(/dark/);
  });

  test('brand navigates home', async ({ page }) => {
    await page.goto('/collection/lucide');
    await expect(firstCell(page)).toBeVisible();
    await waitForClient(page);

    await page.getByRole('link', { name: 'ngxi docs home' }).click();

    await expect(page).toHaveURL(/\/$/);
    await expect(page.locator('.collection-card').first()).toBeVisible();
  });

  test('browse mode shows the sidebar with the active collection flagged', async ({
    page,
  }) => {
    await page.goto('/collection/lucide');
    await expect(firstCell(page)).toBeVisible();
    await waitForClient(page);

    const sidebar = page.locator('aside');
    await expect(sidebar).toBeVisible();
    // The active set's row carries the highlighted state.
    await expect(sidebar.locator('a.bg-accent')).toContainText('Lucide');
  });

  test('sidebar switches collections while keeping the search term', async ({
    page,
  }) => {
    await page.goto('/collection/lucide');
    await expect(firstCell(page)).toBeVisible();
    await waitForClient(page);
    await page.locator('#search-input').fill('circle-check');

    // Sidebar rows are links named by display name + icon count (e.g.
    // "Carbon 2618"); the regex must match the exact casing of the accessible
    // name.
    await page
      .locator('aside')
      .getByRole('link', { name: /^Carbon / })
      .click();

    // The grid switches to carbon while the search term stays in the input.
    await expect(page).toHaveURL(/\/collection\/carbon$/);
    await expect(page.locator('#search-input')).toHaveValue('circle-check');
  });

  test('footer credits the installed iconify version', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('app-footer')).toContainText(`v${iconifyVersion}`);
  });
});