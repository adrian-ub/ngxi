import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideListOrdered],svg[lucide-list-ordered]',
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
    <svg:path d="M10 12h11" />
    <svg:path d="M10 18h11" />
    <svg:path d="M10 6h11" />
    <svg:path d="M4 10h2" />
    <svg:path d="M4 6h1v4" />
    <svg:path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
  `,
})
export class LucideListOrdered {
  readonly class = input('lucide lucide-list-ordered');
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
