import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRainbow],svg[lucide-rainbow]',
  host: {
    class: 'lucide lucide-rainbow',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M22 17a10 10 0 0 0-20 0" />
    <svg:path d="M6 17a6 6 0 0 1 12 0" />
    <svg:path d="M10 17a2 2 0 0 1 4 0" />
  `,
})
export class LucideRainbow {}
