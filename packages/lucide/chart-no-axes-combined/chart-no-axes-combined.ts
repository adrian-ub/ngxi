import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideChartNoAxesCombined],svg[lucide-chart-no-axes-combined]',
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
  template: `<svg:path d="M12 16v5"></svg:path>
    <svg:path d="M16 14v7"></svg:path>
    <svg:path d="M20 10v11"></svg:path>
    <svg:path
      d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"
    ></svg:path>
    <svg:path d="M4 18v3"></svg:path>
    <svg:path d="M8 14v7"></svg:path>`,
})
export class LucideChartNoAxesCombined {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
