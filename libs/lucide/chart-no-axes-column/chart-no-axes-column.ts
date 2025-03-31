import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideChartNoAxesColumn],svg[lucide-chart-no-axes-column]',
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
    <svg:line x1="18" x2="18" y1="20" y2="10" />
    <svg:line x1="12" x2="12" y1="20" y2="4" />
    <svg:line x1="6" x2="6" y1="20" y2="14" />
  `,
})
export class LucideChartNoAxesColumn {
  readonly class = input('lucide lucide-chart-no-axes-column');
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
