import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideZoomIn],svg[lucide-zoom-in]',
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
  template: `<svg:circle cx="11" cy="11" r="8"></svg:circle>
    <svg:line x1="21" x2="16.65" y1="21" y2="16.65"></svg:line>
    <svg:line x1="11" x2="11" y1="8" y2="14"></svg:line>
    <svg:line x1="8" x2="14" y1="11" y2="11"></svg:line>`,
})
export class LucideZoomIn {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
