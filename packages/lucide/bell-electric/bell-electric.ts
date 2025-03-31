import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBellElectric],svg[lucide-bell-electric]',
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
  template: `<svg:path d="M18.8 4A6.3 8.7 0 0 1 20 9"></svg:path>
    <svg:path d="M9 9h.01"></svg:path>
    <svg:circle cx="9" cy="9" r="7"></svg:circle>
    <svg:rect width="10" height="6" x="4" y="16" rx="2"></svg:rect>
    <svg:path d="M14 19c3 0 4.6-1.6 4.6-1.6"></svg:path>
    <svg:circle cx="20" cy="16" r="2"></svg:circle>`,
})
export class LucideBellElectric {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
