import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml',
  standalone: true,
})
export class SafeHtml {
  constructor(private sanitizer: DomSanitizer) {}

  transform(html: string) {
    return this.sanitizer.bypassSecurityTrustHtml(namespaceSvgIds(html));
  }
}

function namespaceSvgIds(svg: string): string {
  const idMap = new Map<string, string>();

  svg = svg.replace(/\bid="([^"]+)"/g, (_, id: string) => {
    const newId = `${id}-${crypto.randomUUID()}`;
    idMap.set(id, newId);
    return `id="${newId}"`;
  });

  for (const [oldId, newId] of idMap) {
    svg = svg
      .replace(`url(#${oldId})`, `url(#${newId})`)
      .replace(`href="#${oldId}"`, `href="#${newId}"`)
      .replace(`xlink:href="#${oldId}"`, `xlink:href="#${newId}"`);
  }

  return svg;
}
