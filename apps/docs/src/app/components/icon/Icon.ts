import { Component, computed, inject, input, resource } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { _IdGenerator } from '@angular/cdk/a11y';
import { CollectionInfo } from '../../data';
import { IconBody, loadCollection } from '../../data/load-collection';

@Component({
  selector: 'app-icon',
  templateUrl: './Icon.html',
})
export class Icon {
  private readonly idGenerator = inject(_IdGenerator);
  private readonly sanitizer = inject(DomSanitizer);

  readonly collection = input.required<CollectionInfo>();
  readonly icon = input.required<string>();

  /**
   * Optional pre-resolved icon body (from a loaded grid chunk). When provided,
   * the grid renders without triggering a full `loadCollection` fetch per cell.
   */
  readonly data = input<IconBody | undefined>(undefined);

  /** Raw SVG string from the collection data (plain string, safe to serialize). */
  private readonly iconData = resource({
    params: () => {
      // When a chunk-provided body is already available, skip the fetch entirely.
      if (this.data()) {
        return undefined;
      }
      return {
        collection: this.collection(),
        icon: this.icon(),
      };
    },

    loader: async ({ params }) => {
      const collectionData = await loadCollection(params.collection.id);

      const iconData = collectionData.icons[params.icon];

      if (!iconData) {
        throw new Error(
          `Icon "${params.icon}" not found in collection "${params.collection.id}"`,
        );
      }

      const width =
        iconData.width ?? collectionData.width ?? collectionData.height ?? 24;
      const height =
        iconData.height ?? collectionData.height ?? collectionData.width ?? 24;

      const body = makeIdsUnique(
        iconData.body,
        this.idGenerator.getId(`icon-${params.collection.id}-${params.icon}`),
      );

      return {
        body, // raw string — survives serialization
        width,
        height,
      };
    },
  });

  /** Sanitized HTML for innerHTML binding — computed runs client-side, SafeHtml never serialized. */
  protected readonly iconResource = computed(() => {
    const data = this.iconData.value() ?? this.data();
    if (!data) return undefined;

    // Chunks carry resolved dimensions (prepare.ts normalizes sets that omit
    // `height`, e.g. si-glyph has root width 17 but no height), but guard
    // against any undefined leaking through: fall back to a square box.
    const width = data.width ?? 24;
    const height = data.height ?? data.width ?? 24;

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">${data.body}</svg>`;

    return {
      body: this.sanitizer.bypassSecurityTrustHtml(svg),
      width,
      height,
    };
  });
}

function makeIdsUnique(body: string, prefix: string): string {
  const ids = new Map<string, string>();

  body = body.replace(/\bid="([^"]+)"/g, (_, id: string) => {
    const newId = `${prefix}-${id}`;
    ids.set(id, newId);
    return `id="${newId}"`;
  });

  for (const [oldId, newId] of ids) {
    body = body.replace(`url(#${oldId})`, `url(#${newId})`);

    body = body.replace(`href="#${oldId}"`, `href="#${newId}"`);

    body = body.replace(`xlink:href="#${oldId}"`, `xlink:href="#${newId}"`);
  }

  return body;
}
