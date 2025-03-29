import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCornerUpRight],svg[lucide-corner-up-right]',
  host: {
    class: 'lucide lucide-corner-up-right',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:polyline points="15 14 20 9 15 4" />
    <svg:path d="M4 20v-7a4 4 0 0 1 4-4h12" />
  `,
})
export class LucideCornerUpRight {}
