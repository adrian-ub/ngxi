import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTrendingUpDown],svg[lucide-trending-up-down]',
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
    <svg:path d="M14.828 14.828 21 21" />
    <svg:path d="M21 16v5h-5" />
    <svg:path d="m21 3-9 9-4-4-6 6" />
    <svg:path d="M21 8V3h-5" />
  `,
})
export class LucideTrendingUpDown {
  readonly class = input('lucide lucide-trending-up-down');
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
