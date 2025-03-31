import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBatteryCharging],svg[lucide-battery-charging]',
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
  template: `<svg:path d="M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"></svg:path>
    <svg:path d="M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1"></svg:path>
    <svg:path d="m11 7-3 5h4l-3 5"></svg:path>
    <svg:line x1="22" x2="22" y1="11" y2="13"></svg:line>`,
})
export class LucideBatteryCharging {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
