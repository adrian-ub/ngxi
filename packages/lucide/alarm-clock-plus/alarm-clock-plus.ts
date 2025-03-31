import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAlarmClockPlus],svg[lucide-alarm-clock-plus]',
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
  template: `<svg:circle cx="12" cy="13" r="8"></svg:circle>
    <svg:path d="M5 3 2 6"></svg:path>
    <svg:path d="m22 6-3-3"></svg:path>
    <svg:path d="M6.38 18.7 4 21"></svg:path>
    <svg:path d="M17.64 18.67 20 21"></svg:path>
    <svg:path d="M12 10v6"></svg:path>
    <svg:path d="M9 13h6"></svg:path>`,
})
export class LucideAlarmClockPlus {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
