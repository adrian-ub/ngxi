import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideChartColumnIncreasing],svg[lucide-chart-column-increasing]',
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
  template: `<svg:path d="M13 17V9"></svg:path>
    <svg:path d="M18 17V5"></svg:path>
    <svg:path d="M3 3v16a2 2 0 0 0 2 2h16"></svg:path>
    <svg:path d="M8 17v-3"></svg:path>`,
})
export class LucideChartColumnIncreasing {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
