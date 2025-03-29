import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideIterationCw],svg[lucide-iteration-cw]',
  host: {
    class: 'lucide lucide-iteration-cw',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4" />
    <svg:polyline points="8 22 4 18 8 14" />
  `,
})
export class LucideIterationCw {}
