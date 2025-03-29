import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGauge],svg[lucide-gauge]',
  host: {
    class: 'lucide lucide-gauge',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m12 14 4-4" />
    <svg:path d="M3.34 19a10 10 0 1 1 17.32 0" />
  `,
})
export class LucideGauge {}
