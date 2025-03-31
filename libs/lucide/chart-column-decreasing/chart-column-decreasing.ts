import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideChartColumnDecreasing],svg[lucide-chart-column-decreasing]',
  host: {
    role: 'img',

    '[attr.class]': 'class()',
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    '[attr.stroke]': 'stroke()',
    '[attr.stroke-width]': 'strokeWidth()',
    '[attr.stroke-linecap]': 'strokeLinecap()',
    '[attr.stroke-linejoin]': 'strokeLinejoin()',
  },
  template: `
    <svg:path d="M13 17V9" />
    <svg:path d="M18 17v-3" />
    <svg:path d="M3 3v16a2 2 0 0 0 2 2h16" />
    <svg:path d="M8 17V5" />
  `,
})
export class LucideChartColumnDecreasing {
  readonly class = input('lucide lucide-chart-column-decreasing');
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly width = input('24');
  readonly height = input('24');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
