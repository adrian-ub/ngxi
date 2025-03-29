import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideChartGantt],svg[lucide-chart-gantt]',
  host: {
    class: 'lucide lucide-chart-gantt',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M10 6h8" />
    <svg:path d="M12 16h6" />
    <svg:path d="M3 3v16a2 2 0 0 0 2 2h16" />
    <svg:path d="M8 11h7" />
  `,
})
export class LucideChartGantt {}
