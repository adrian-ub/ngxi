import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideThermometerSun],svg[lucide-thermometer-sun]',
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
  template: `<svg:path d="M12 9a4 4 0 0 0-2 7.5"></svg:path>
    <svg:path d="M12 3v2"></svg:path>
    <svg:path d="m6.6 18.4-1.4 1.4"></svg:path>
    <svg:path d="M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></svg:path>
    <svg:path d="M4 13H2"></svg:path>
    <svg:path d="M6.34 7.34 4.93 5.93"></svg:path>`,
})
export class LucideThermometerSun {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
