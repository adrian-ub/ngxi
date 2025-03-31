import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideChartBarIncreasing],svg[lucide-chart-bar-increasing]',
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
  template: `<svg:path d="M3 3v16a2 2 0 0 0 2 2h16"></svg:path>
    <svg:path d="M7 11h8"></svg:path>
    <svg:path d="M7 16h12"></svg:path>
    <svg:path d="M7 6h3"></svg:path>`,
})
export class LucideChartBarIncreasing {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
