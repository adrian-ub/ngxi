import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCombine],svg[lucide-combine]',
  host: {
    role: 'img',

    '[attr.class]': 'class()',
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    '[attr.stroke]': 'stroke()',
    '[attr.stroke-width]': 'strokeWidth()',
    '[attr.stroke-linecap]': 'strokeLinecap()',
    '[attr.stroke-linejoin]': 'strokeLinejoin()',
  },
  template: `
    <svg:path d="M10 18H5a3 3 0 0 1-3-3v-1" />
    <svg:path d="M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" />
    <svg:path d="M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" />
    <svg:path d="m7 21 3-3-3-3" />
    <svg:rect x="14" y="14" width="8" height="8" rx="2" />
    <svg:rect x="2" y="2" width="8" height="8" rx="2" />
  `,
})
export class LucideCombine {
  readonly class = input('lucide lucide-combine');
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly width = input('24');
  readonly height = input('24');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
