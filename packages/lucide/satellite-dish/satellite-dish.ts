import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSatelliteDish],svg[lucide-satellite-dish]',
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
  template: `<svg:path d="M4 10a7.31 7.31 0 0 0 10 10Z"></svg:path>
    <svg:path d="m9 15 3-3"></svg:path>
    <svg:path d="M17 13a6 6 0 0 0-6-6"></svg:path>
    <svg:path d="M21 13A10 10 0 0 0 11 3"></svg:path>`,
})
export class LucideSatelliteDish {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
