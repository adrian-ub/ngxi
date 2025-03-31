import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMapPinOff],svg[lucide-map-pin-off]',
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
  template: `<svg:path d="M12.75 7.09a3 3 0 0 1 2.16 2.16"></svg:path>
    <svg:path
      d="M17.072 17.072c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568"
    ></svg:path>
    <svg:path d="m2 2 20 20"></svg:path>
    <svg:path
      d="M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533"
    ></svg:path>
    <svg:path d="M9.13 9.13a3 3 0 0 0 3.74 3.74"></svg:path>`,
})
export class LucideMapPinOff {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
