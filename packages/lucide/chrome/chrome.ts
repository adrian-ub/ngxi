import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideChrome],svg[lucide-chrome]',
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
  template: `<svg:circle cx="12" cy="12" r="10"></svg:circle>
    <svg:circle cx="12" cy="12" r="4"></svg:circle>
    <svg:line x1="21.17" x2="12" y1="8" y2="8"></svg:line>
    <svg:line x1="3.95" x2="8.54" y1="6.06" y2="14"></svg:line>
    <svg:line x1="10.88" x2="15.46" y1="21.94" y2="14"></svg:line>`,
})
export class LucideChrome {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
