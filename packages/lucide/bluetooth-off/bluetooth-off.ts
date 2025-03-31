import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBluetoothOff],svg[lucide-bluetooth-off]',
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
  template: `<svg:path d="m17 17-5 5V12l-5 5"></svg:path>
    <svg:path d="m2 2 20 20"></svg:path>
    <svg:path d="M14.5 9.5 17 7l-5-5v4.5"></svg:path>`,
})
export class LucideBluetoothOff {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
