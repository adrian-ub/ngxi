import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideChartBarBig],svg[lucide-chart-bar-big]',
  host: {
    class: 'lucide lucide-chart-bar-big',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M3 3v16a2 2 0 0 0 2 2h16" />
    <svg:rect x="7" y="13" width="9" height="4" rx="1" />
    <svg:rect x="7" y="5" width="12" height="4" rx="1" />
  `,
})
export class LucideChartBarBig {}
