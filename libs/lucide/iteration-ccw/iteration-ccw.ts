import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideIterationCcw],svg[lucide-iteration-ccw]',
  host: {
    class: 'lucide lucide-iteration-ccw',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8" />
    <svg:polyline points="16 14 20 18 16 22" />
  `,
})
export class LucideIterationCcw {}
