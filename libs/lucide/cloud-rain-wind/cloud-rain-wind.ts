import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCloudRainWind],svg[lucide-cloud-rain-wind]',
  host: {
    class: 'lucide lucide-cloud-rain-wind',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
    <svg:path d="m9.2 22 3-7" />
    <svg:path d="m9 13-3 7" />
    <svg:path d="m17 13-3 7" />
  `,
})
export class LucideCloudRainWind {}
