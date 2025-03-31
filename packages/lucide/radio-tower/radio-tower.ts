import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRadioTower],svg[lucide-radio-tower]',
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
  template: `<svg:path d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9"></svg:path>
    <svg:path d="M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"></svg:path>
    <svg:circle cx="12" cy="9" r="2"></svg:circle>
    <svg:path d="M16.2 4.8c2 2 2.26 5.11.8 7.47"></svg:path>
    <svg:path d="M19.1 1.9a9.96 9.96 0 0 1 0 14.1"></svg:path>
    <svg:path d="M9.5 18h5"></svg:path>
    <svg:path d="m8 22 4-11 4 11"></svg:path>`,
})
export class LucideRadioTower {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
