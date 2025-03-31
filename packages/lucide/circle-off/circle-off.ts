import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCircleOff],svg[lucide-circle-off]',
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
  template: `<svg:path d="m2 2 20 20"></svg:path>
    <svg:path d="M8.35 2.69A10 10 0 0 1 21.3 15.65"></svg:path>
    <svg:path d="M19.08 19.08A10 10 0 1 1 4.92 4.92"></svg:path>`,
})
export class LucideCircleOff {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
