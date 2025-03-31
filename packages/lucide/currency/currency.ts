import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCurrency],svg[lucide-currency]',
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
  template: `<svg:circle cx="12" cy="12" r="8"></svg:circle>
    <svg:line x1="3" x2="6" y1="3" y2="6"></svg:line>
    <svg:line x1="21" x2="18" y1="3" y2="6"></svg:line>
    <svg:line x1="3" x2="6" y1="21" y2="18"></svg:line>
    <svg:line x1="21" x2="18" y1="21" y2="18"></svg:line>`,
})
export class LucideCurrency {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
