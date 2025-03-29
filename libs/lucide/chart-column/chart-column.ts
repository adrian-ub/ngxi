import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideChartColumn],svg[lucide-chart-column]',
  host: {
    class: 'lucide lucide-chart-column',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M3 3v16a2 2 0 0 0 2 2h16" />
    <svg:path d="M18 17V9" />
    <svg:path d="M13 17V5" />
    <svg:path d="M8 17v-3" />
  `,
})
export class LucideChartColumn {}
