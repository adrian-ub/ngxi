import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGlassWater],svg[lucide-glass-water]',
  host: {
    class: 'lucide lucide-glass-water',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z"
    />
    <svg:path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0" />
  `,
})
export class LucideGlassWater {}
