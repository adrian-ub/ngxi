import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideWind],svg[lucide-wind]',
  host: {
    class: 'lucide lucide-wind',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12.8 19.6A2 2 0 1 0 14 16H2" />
    <svg:path d="M17.5 8a2.5 2.5 0 1 1 2 4H2" />
    <svg:path d="M9.8 4.4A2 2 0 1 1 11 8H2" />
  `,
})
export class LucideWind {}
