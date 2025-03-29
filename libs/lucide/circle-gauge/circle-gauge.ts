import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCircleGauge],svg[lucide-circle-gauge]',
  host: {
    class: 'lucide lucide-circle-gauge',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M15.6 2.7a10 10 0 1 0 5.7 5.7" />
    <svg:circle cx="12" cy="12" r="2" />
    <svg:path d="M13.4 10.6 19 5" />
  `,
})
export class LucideCircleGauge {}
