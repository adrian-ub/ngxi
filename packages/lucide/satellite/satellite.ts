import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSatellite],svg[lucide-satellite]',
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
  template: `<svg:path d="M13 7 9 3 5 7l4 4"></svg:path>
    <svg:path d="m17 11 4 4-4 4-4-4"></svg:path>
    <svg:path d="m8 12 4 4 6-6-4-4Z"></svg:path>
    <svg:path d="m16 8 3-3"></svg:path>
    <svg:path d="M9 21a6 6 0 0 0-6-6"></svg:path>`,
})
export class LucideSatellite {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
