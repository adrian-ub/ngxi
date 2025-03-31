import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMousePointerClick],svg[lucide-mouse-pointer-click]',
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
  template: `<svg:path d="M14 4.1 12 6"></svg:path>
    <svg:path d="m5.1 8-2.9-.8"></svg:path>
    <svg:path d="m6 12-1.9 2"></svg:path>
    <svg:path d="M7.2 2.2 8 5.1"></svg:path>
    <svg:path
      d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"
    ></svg:path>`,
})
export class LucideMousePointerClick {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
