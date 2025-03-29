import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCornerUpLeft],svg[lucide-corner-up-left]',
  host: {
    class: 'lucide lucide-corner-up-left',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:polyline points="9 14 4 9 9 4" />
    <svg:path d="M20 20v-7a4 4 0 0 0-4-4H4" />
  `,
})
export class LucideCornerUpLeft {}
