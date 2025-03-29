import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSatellite],svg[lucide-satellite]',
  host: {
    class: 'lucide lucide-satellite',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M13 7 9 3 5 7l4 4" />
    <svg:path d="m17 11 4 4-4 4-4-4" />
    <svg:path d="m8 12 4 4 6-6-4-4Z" />
    <svg:path d="m16 8 3-3" />
    <svg:path d="M9 21a6 6 0 0 0-6-6" />
  `,
})
export class LucideSatellite {}
