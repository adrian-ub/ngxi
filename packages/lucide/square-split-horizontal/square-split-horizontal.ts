import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideSquareSplitHorizontal],svg[lucide-square-split-horizontal]',
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    '[attr.stroke]': 'stroke()',
    '[attr.stroke-width]': 'strokeWidth()',
    '[attr.stroke-linecap]': 'strokeLinecap()',
    '[attr.stroke-linejoin]': 'strokeLinejoin()',
  },
  template: `<svg:path d="M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3"></svg:path>
    <svg:path d="M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3"></svg:path>
    <svg:line x1="12" x2="12" y1="4" y2="20"></svg:line>`,
})
export class LucideSquareSplitHorizontal {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
