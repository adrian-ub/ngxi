import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCornerRightDown],svg[lucide-corner-right-down]',
  host: {
    class: 'lucide lucide-corner-right-down',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:polyline points="10 15 15 20 20 15" />
    <svg:path d="M4 4h7a4 4 0 0 1 4 4v12" />
  `,
})
export class LucideCornerRightDown {}
