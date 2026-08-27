import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { test, expect, type Locator, type Page } from '@playwright/test';
import { workspaceRoot } from '@nx/devkit';
import { version as iconifyVersion } from '@iconify/json/package.json';

/**
 * The e2e server starts `internal-docs:serve`, whose `prepare` dependency
 * materializes the real manifest before tests run. Derive expected card
 * counts from it instead of hardcoding, so adding/removing collections
 * keeps these tests correct.
 */
const manifest = JSON.parse(
  readFileSync(
    join(workspaceRoot, 'apps/docs/public/icons/manifest.json'),
    'utf-8',
  ),
) as {
  sets: Array<{
    collection: string;
    name: string;
    license: string;
    categories: string[];
    category: string;
  }>;
};
const totalSets = manifest.sets.length;
const ui24Count = manifest.sets.filter((s) =>
  s.categories.includes('UI 24px'),
).length;
const iscCount = manifest.sets.filter((s) => s.license === 'ISC').length;

/**
 * The landing card for the exact `lucide` collection. A plain
 * `hasText: /lucide/i` filter also matches the `lucide-lab` set, and a
 * `hasText` regex anchors against raw textContent (leading whitespace defeats
 * any `^` anchor), so match the card's accessible name instead: it starts with
 * the collection slug (`lucide Lucide 1817`), while `lucide-lab` starts with
 * `lucide-lab`.
 */
function lucideCard(page: Page): Locator {
  return page.getByRole('button', { name: /^lucide / });
}

/**
 * The app uses `withEventReplay` hydration: SSR paints the shell (header,
 * selects, search bar) but Angular attaches handlers only after hydration.
 * Interactions that land before that are replayed, which can drop or race.
 * The reliable post-hydration marker is a client-only fetch result: sample
 * icons on the landing (per-set samples asset) and grid cells on a collection
 * page (set bundle + index). Wait for one of them before interacting.
 */
async function waitForClient(page: Page): Promise<void> {
  await expect(
    page.locator('.collection-card app-sample-icon, .icon-cell').first(),
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
    await expect(page.locator('app-icon-browser-home')).toBeVisible();
    // No set auto-selected: the select shows the "all collections" empty option.
    await expect(page.locator('#collection-select')).toHaveValue('');
    // The full collections landing grid renders every manifest set.
    await expect(page.locator('.collection-card')).toHaveCount(totalSets);
    await expect(lucideCard(page)).toHaveCount(1);
    // Sample icons stream in from the per-set samples asset (post-hydration).
    await expect(
      page.locator('.collection-card app-sample-icon').first(),
    ).toBeVisible();
  });

  test('clicking a collection opens its browse grid', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.collection-card').first()).toBeVisible();
    await waitForClient(page);
    await lucideCard(page).click();

    await expect(page).toHaveURL(/\/collection\/lucide$/);
    await expect(page.locator('.grid-viewport')).toBeVisible();
    await expect(page.locator('.icon-cell').first()).toBeVisible();
    // Meta line shows the active set.
    await expect(page.locator('app-icon-browser-collection')).toContainText('Lucide');
    await expect(
      page.getByRole('button', { name: /collections/ }),
    ).toBeVisible();
  });

  test('back control returns to the landing', async ({ page }) => {
    await page.goto('/collection/lucide');
    await expect(page.locator('.grid-viewport')).toBeVisible();
    await waitForClient(page);

    await page.getByRole('button', { name: /collections/ }).click();

    await expect(page).toHaveURL(/\/$/);
    await expect(page.locator('.collection-card').first()).toBeVisible();
  });

  test('deep link to a collection renders its grid', async ({ page }) => {
    await page.goto('/collection/lucide');
    await expect(page.locator('app-icon-browser-collection')).toBeVisible();
    await expect(page.locator('.grid-viewport')).toBeVisible();
    await expect(page.locator('.icon-cell').first()).toBeVisible();
  });

  test('in-set search filters icons without debounce', async ({ page }) => {
    await page.goto('/collection/lucide');
    await expect(page.locator('.grid-viewport')).toBeVisible();
    await waitForClient(page);

    await page.locator('#search-input').fill('circle-check');

    // Sync filter: the first canonical result is circle-check itself.
    await expect(page.locator('.icon-name').first()).toContainText(
      'circle-check',
    );
  });

  test('clicking an icon opens the detail dialog', async ({ page }) => {
    await page.goto('/collection/lucide');
    await expect(page.locator('.grid-viewport')).toBeVisible();
    await waitForClient(page);
    await page.locator('#search-input').fill('circle-check');
    await expect(page.locator('.icon-name').first()).toContainText(
      'circle-check',
    );

    await clickCellOpenDialog(page, page.locator('.icon-cell').first());

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
    await expect(page.locator('.grid-viewport')).toBeVisible();
    await waitForClient(page);
    await page.locator('#search-input').fill('circle-check');
    await expect(page.locator('.icon-name').first()).toContainText(
      'circle-check',
    );

    await clickCellOpenDialog(page, page.locator('.icon-cell').first());

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
        "import { LucideCircleCheck } from '@ngxi/lucide'",
      );
    } else {
      await expect(
        page.locator('.snippet:has(h3:has-text("Angular Import")) code'),
      ).toContainText("import { LucideCircleCheck } from '@ngxi/lucide'");
    }
  });

  test('alias icons are tagged', async ({ page }) => {
    await page.goto('/collection/lucide');
    await expect(page.locator('.grid-viewport')).toBeVisible();
    await waitForClient(page);

    await page.locator('#search-input').fill('activity-square');

    await expect(page.locator('.icon-name').first()).toContainText(
      'activity-square',
    );
    await expect(page.locator('.alias-tag').first()).toContainText(
      'alias of square-activity',
    );
  });

  test('category filter narrows the landing', async ({ page }) => {
    await page.goto('/');
    await expect(
      page.locator('#category-select option', { hasText: 'UI 24px' }),
    ).toHaveCount(1);
    await waitForClient(page);

    await page.locator('#category-select').selectOption('UI 24px');

    // Deep-linkable: the filter lands in the URL.
    await expect(page).toHaveURL(/category=UI/);
    // Every manifest set in the category stays visible.
    await expect(page.locator('.collection-card')).toHaveCount(ui24Count);
    await expect(lucideCard(page)).toHaveCount(1);

    await page.locator('#category-select').selectOption('');
    await expect(page.locator('.collection-card')).toHaveCount(totalSets);
  });

  test('license filter shows the available license', async ({ page }) => {
    await page.goto('/');
    // Lucide ships under the ISC license.
    await expect(
      page.locator('#license-select option', { hasText: 'ISC' }),
    ).toHaveCount(1);
    await waitForClient(page);

    await page.locator('#license-select').selectOption('ISC');

    await expect(page).toHaveURL(/license=ISC/);
    await expect(page.locator('.collection-card')).toHaveCount(iscCount);

    await page.locator('#license-select').selectOption('');
    await expect(page.locator('.collection-card')).toHaveCount(totalSets);
  });

  test('global search matches icons across collections', async ({ page }) => {
    await page.goto('/');
    await waitForClient(page);

    await page.locator('#search-input').fill('check');

    // The 250ms debounce plus index fetches settle under auto-retry.
    await expect(
      page.locator('section[aria-label="matching collections"]'),
    ).toBeVisible();
    await expect(page.locator('.icon-group').first()).toBeVisible();
    await expect(page.locator('.icon-group .icon-cell').first()).toBeVisible();

    // Clicking an icon inside the lucide group opens the dialog with lucide
    // metadata. The groups are alphabetical, so target lucide explicitly
    // (the header renders `@ngxi/lucide · ...`).
    const lucideGroup = page
      .locator('.icon-group')
      .filter({ hasText: /@ngxi\/lucide ·/ });
    await clickCellOpenDialog(
      page,
      lucideGroup.locator('.icon-cell').first(),
    );
    await expect(page.locator('.icon-meta dd code').first()).toContainText(
      'Lucide',
    );
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
    await expect(page.locator('.grid-viewport')).toBeVisible();
    await waitForClient(page);

    await page.getByRole('button', { name: 'ngxi docs home' }).click();

    await expect(page).toHaveURL(/\/$/);
    await expect(page.locator('.collection-card').first()).toBeVisible();
  });

  test('browse mode shows the sidebar with the active collection flagged', async ({
    page,
  }) => {
    await page.goto('/collection/lucide');
    await expect(page.locator('.grid-viewport')).toBeVisible();
    await waitForClient(page);

    const sidebar = page.locator('app-collection-sidebar');
    await expect(sidebar).toBeVisible();
    // The active set's row carries the highlighted state.
    await expect(
      sidebar.locator('[data-set-row][data-active="true"]'),
    ).toContainText('Lucide');
  });

  test('sidebar switches collections preserving the query', async ({
    page,
  }) => {
    await page.goto('/collection/lucide?q=circle-check');
    await expect(page.locator('.grid-viewport')).toBeVisible();
    await waitForClient(page);

    // Sidebar rows are named by display name + icon count (e.g. "Carbon 2733");
    // the regex must match the exact casing of the accessible name.
    await page
      .locator('app-collection-sidebar')
      .getByRole('button', { name: /^Carbon / })
      .click();

    // The query parameter survives the collection switch.
    await expect(page).toHaveURL(/\/collection\/carbon\?q=circle-check$/);
    await expect(page.locator('#search-input')).toHaveValue('circle-check');
  });

  test('footer credits the installed iconify version', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('footer')).toContainText(`v${iconifyVersion}`);
  });
});
