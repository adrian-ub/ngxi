import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCloudMoonRain],svg[lucide-cloud-moon-rain]',
  host: {
    class: 'lucide lucide-cloud-moon-rain',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197" />
    <svg:path d="M11 20v2" />
    <svg:path d="M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24" />
    <svg:path d="M7 19v2" />
  `,
})
export class LucideCloudMoonRain {}
