import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideChartSpline],svg[lucide-chart-spline]',
  host: {
    class: 'lucide lucide-chart-spline',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M3 3v16a2 2 0 0 0 2 2h16" />
    <svg:path d="M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7" />
  `,
})
export class LucideChartSpline {}
