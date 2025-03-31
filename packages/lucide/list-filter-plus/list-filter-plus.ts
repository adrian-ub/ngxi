import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideListFilterPlus],svg[lucide-list-filter-plus]',
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
  template: `<svg:path d="M10 18h4"></svg:path>
    <svg:path d="M11 6H3"></svg:path>
    <svg:path d="M15 6h6"></svg:path>
    <svg:path d="M18 9V3"></svg:path>
    <svg:path d="M7 12h8"></svg:path>`,
})
export class LucideListFilterPlus {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
