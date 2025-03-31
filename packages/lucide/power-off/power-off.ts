import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePowerOff],svg[lucide-power-off]',
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
  template: `<svg:path d="M18.36 6.64A9 9 0 0 1 20.77 15"></svg:path>
    <svg:path d="M6.16 6.16a9 9 0 1 0 12.68 12.68"></svg:path>
    <svg:path d="M12 2v4"></svg:path>
    <svg:path d="m2 2 20 20"></svg:path>`,
})
export class LucidePowerOff {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
