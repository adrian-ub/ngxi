import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideChartScatter],svg[lucide-chart-scatter]',
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
  template: `<svg:circle
      cx="7.5"
      cy="7.5"
      r=".5"
      fill="currentColor"
    ></svg:circle>
    <svg:circle cx="18.5" cy="5.5" r=".5" fill="currentColor"></svg:circle>
    <svg:circle cx="11.5" cy="11.5" r=".5" fill="currentColor"></svg:circle>
    <svg:circle cx="7.5" cy="16.5" r=".5" fill="currentColor"></svg:circle>
    <svg:circle cx="17.5" cy="14.5" r=".5" fill="currentColor"></svg:circle>
    <svg:path d="M3 3v16a2 2 0 0 0 2 2h16"></svg:path>`,
})
export class LucideChartScatter {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
