import { Component, computed, inject, input, resource } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { _IdGenerator } from '@angular/cdk/a11y';
import { CollectionInfo } from '../../data';
import { loadCollection } from '../../data/load-collection';

@Component({
  selector: 'Icon',
  templateUrl: './Icon.html',
})
export class Icon {
  private readonly idGenerator = inject(_IdGenerator);
  private readonly sanitizer = inject(DomSanitizer);

  readonly collection = input.required<CollectionInfo>();
  readonly icon = input.required<string>();

  /** Raw SVG string from the collection data (plain string, safe to serialize). */
  private readonly iconData = resource({
    params: () => ({
      collection: this.collection(),
      icon: this.icon(),
    }),

    loader: async ({ params }) => {
      const collectionData = await loadCollection(params.collection.id);

      const iconData = collectionData.icons[params.icon];

      if (!iconData) {
        throw new Error(
          `Icon "${params.icon}" not found in collection "${params.collection.id}"`,
        );
      }

      const width = iconData.width ?? collectionData.width ?? 24;
      const height = iconData.height ?? collectionData.height ?? 24;

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
    const data = this.iconData.value();
    if (!data) return undefined;

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${data.width}" height="${data.height}" viewBox="0 0 ${data.width} ${data.height}">${data.body}</svg>`;

    return {
      body: this.sanitizer.bypassSecurityTrustHtml(svg),
      width: data.width,
      height: data.height,
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
