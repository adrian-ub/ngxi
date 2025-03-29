import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideChartNoAxesColumn],svg[lucide-chart-no-axes-column]',
  host: {
    class: 'lucide lucide-chart-no-axes-column',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:line x1="18" x2="18" y1="20" y2="10" />
    <svg:line x1="12" x2="12" y1="20" y2="4" />
    <svg:line x1="6" x2="6" y1="20" y2="14" />
  `,
})
export class LucideChartNoAxesColumn {}
