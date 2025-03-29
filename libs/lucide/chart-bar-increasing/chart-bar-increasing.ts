import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideChartBarIncreasing],svg[lucide-chart-bar-increasing]',
  host: {
    class: 'lucide lucide-chart-bar-increasing',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M3 3v16a2 2 0 0 0 2 2h16" />
    <svg:path d="M7 11h8" />
    <svg:path d="M7 16h12" />
    <svg:path d="M7 6h3" />
  `,
})
export class LucideChartBarIncreasing {}
