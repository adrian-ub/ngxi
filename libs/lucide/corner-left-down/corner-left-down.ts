import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCornerLeftDown],svg[lucide-corner-left-down]',
  host: {
    class: 'lucide lucide-corner-left-down',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:polyline points="14 15 9 20 4 15" />
    <svg:path d="M20 4h-7a4 4 0 0 0-4 4v12" />
  `,
})
export class LucideCornerLeftDown {}
