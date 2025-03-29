import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSquareChartGantt],svg[lucide-square-chart-gantt]',
  host: {
    class: 'lucide lucide-square-chart-gantt',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" />
    <svg:path d="M9 8h7" />
    <svg:path d="M8 12h6" />
    <svg:path d="M11 16h5" />
  `,
})
export class LucideSquareChartGantt {}
