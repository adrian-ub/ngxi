import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCornerRightUp],svg[lucide-corner-right-up]',
  host: {
    class: 'lucide lucide-corner-right-up',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:polyline points="10 9 15 4 20 9" />
    <svg:path d="M4 20h7a4 4 0 0 0 4-4V4" />
  `,
})
export class LucideCornerRightUp {}
