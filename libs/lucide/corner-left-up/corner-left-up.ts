import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCornerLeftUp],svg[lucide-corner-left-up]',
  host: {
    class: 'lucide lucide-corner-left-up',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:polyline points="14 9 9 4 4 9" />
    <svg:path d="M20 20h-7a4 4 0 0 1-4-4V4" />
  `,
})
export class LucideCornerLeftUp {}
