import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideWifiHigh],svg[lucide-wifi-high]',
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
  template: `<svg:path d="M12 20h.01"></svg:path>
    <svg:path d="M5 12.859a10 10 0 0 1 14 0"></svg:path>
    <svg:path d="M8.5 16.429a5 5 0 0 1 7 0"></svg:path>`,
})
export class LucideWifiHigh {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
