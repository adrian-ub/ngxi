import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArrowDownZA],svg[lucide-arrow-down-z-a]',
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
  template: `<svg:path d="m3 16 4 4 4-4"></svg:path>
    <svg:path d="M7 4v16"></svg:path>
    <svg:path d="M15 4h5l-5 6h5"></svg:path>
    <svg:path d="M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"></svg:path>
    <svg:path d="M20 18h-5"></svg:path>`,
})
export class LucideArrowDownZA {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
