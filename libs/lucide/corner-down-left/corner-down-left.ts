import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCornerDownLeft],svg[lucide-corner-down-left]',
  host: {
    class: 'lucide lucide-corner-down-left',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:polyline points="9 10 4 15 9 20" />
    <svg:path d="M20 4v7a4 4 0 0 1-4 4H4" />
  `,
})
export class LucideCornerDownLeft {}
