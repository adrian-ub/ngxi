import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTrendingDown],svg[lucide-trending-down]',
  host: {
    class: 'lucide lucide-trending-down',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
    <svg:polyline points="16 17 22 17 22 11" />
  `,
})
export class LucideTrendingDown {}
