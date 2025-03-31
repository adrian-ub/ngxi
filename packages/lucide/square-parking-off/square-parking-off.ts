import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSquareParkingOff],svg[lucide-square-parking-off]',
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
  template: `<svg:path
      d="M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41"
    ></svg:path>
    <svg:path d="M3 8.7V19a2 2 0 0 0 2 2h10.3"></svg:path>
    <svg:path d="m2 2 20 20"></svg:path>
    <svg:path d="M13 13a3 3 0 1 0 0-6H9v2"></svg:path>
    <svg:path d="M9 17v-2.3"></svg:path>`,
})
export class LucideSquareParkingOff {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
