import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideChartColumnBig],svg[lucide-chart-column-big]',
  host: {
    class: 'lucide lucide-chart-column-big',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M3 3v16a2 2 0 0 0 2 2h16" />
    <svg:rect x="15" y="5" width="4" height="12" rx="1" />
    <svg:rect x="7" y="8" width="4" height="9" rx="1" />
  `,
})
export class LucideChartColumnBig {}
