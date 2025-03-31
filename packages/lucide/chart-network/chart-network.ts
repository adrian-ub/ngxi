import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideChartNetwork],svg[lucide-chart-network]',
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
  template: `<svg:path d="m13.11 7.664 1.78 2.672"></svg:path>
    <svg:path d="m14.162 12.788-3.324 1.424"></svg:path>
    <svg:path d="m20 4-6.06 1.515"></svg:path>
    <svg:path d="M3 3v16a2 2 0 0 0 2 2h16"></svg:path>
    <svg:circle cx="12" cy="6" r="2"></svg:circle>
    <svg:circle cx="16" cy="12" r="2"></svg:circle>
    <svg:circle cx="9" cy="15" r="2"></svg:circle>`,
})
export class LucideChartNetwork {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
