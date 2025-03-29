import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCornerDownRight],svg[lucide-corner-down-right]',
  host: {
    class: 'lucide lucide-corner-down-right',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:polyline points="15 10 20 15 15 20" />
    <svg:path d="M4 4v7a4 4 0 0 0 4 4h12" />
  `,
})
export class LucideCornerDownRight {}
