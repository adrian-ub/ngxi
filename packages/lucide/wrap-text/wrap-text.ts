import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideWrapText],svg[lucide-wrap-text]',
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
  template: `<svg:line x1="3" x2="21" y1="6" y2="6"></svg:line>
    <svg:path d="M3 12h15a3 3 0 1 1 0 6h-4"></svg:path>
    <svg:polyline points="16 16 14 18 16 20"></svg:polyline>
    <svg:line x1="3" x2="10" y1="18" y2="18"></svg:line>`,
})
export class LucideWrapText {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
