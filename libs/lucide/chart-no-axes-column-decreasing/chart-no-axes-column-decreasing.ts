import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideChartNoAxesColumnDecreasing],svg[lucide-chart-no-axes-column-decreasing]',
  host: {
    class: 'lucide lucide-chart-no-axes-column-decreasing',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 20V10" />
    <svg:path d="M18 20v-4" />
    <svg:path d="M6 20V4" />
  `,
})
export class LucideChartNoAxesColumnDecreasing {}
