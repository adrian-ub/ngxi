import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideChartPie],svg[lucide-chart-pie]',
  host: {
    class: 'lucide lucide-chart-pie',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"
    />
    <svg:path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
  `,
})
export class LucideChartPie {}
