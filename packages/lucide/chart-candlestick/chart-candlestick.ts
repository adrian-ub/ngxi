import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideChartCandlestick],svg[lucide-chart-candlestick]',
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
  template: `<svg:path d="M9 5v4"></svg:path>
    <svg:rect width="4" height="6" x="7" y="9" rx="1"></svg:rect>
    <svg:path d="M9 15v2"></svg:path>
    <svg:path d="M17 3v2"></svg:path>
    <svg:rect width="4" height="8" x="15" y="5" rx="1"></svg:rect>
    <svg:path d="M17 13v3"></svg:path>
    <svg:path d="M3 3v16a2 2 0 0 0 2 2h16"></svg:path>`,
})
export class LucideChartCandlestick {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
