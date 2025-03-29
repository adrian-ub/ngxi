import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideChartLine],svg[lucide-chart-line]',
  host: {
    class: 'lucide lucide-chart-line',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M3 3v16a2 2 0 0 0 2 2h16" />
    <svg:path d="m19 9-5 5-4-4-3 3" />
  `,
})
export class LucideChartLine {}
