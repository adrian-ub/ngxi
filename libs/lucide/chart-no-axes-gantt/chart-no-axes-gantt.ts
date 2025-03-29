import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideChartNoAxesGantt],svg[lucide-chart-no-axes-gantt]',
  host: {
    class: 'lucide lucide-chart-no-axes-gantt',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M8 6h10" />
    <svg:path d="M6 12h9" />
    <svg:path d="M11 18h7" />
  `,
})
export class LucideChartNoAxesGantt {}
