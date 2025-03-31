import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBatteryMedium],svg[lucide-battery-medium]',
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
  template: `<svg:rect
      width="16"
      height="10"
      x="2"
      y="7"
      rx="2"
      ry="2"
    ></svg:rect>
    <svg:line x1="22" x2="22" y1="11" y2="13"></svg:line>
    <svg:line x1="6" x2="6" y1="11" y2="13"></svg:line>
    <svg:line x1="10" x2="10" y1="11" y2="13"></svg:line>`,
})
export class LucideBatteryMedium {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
