import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSquareRoundCorner],svg[lucide-square-round-corner]',
  host: {
    class: 'lucide lucide-square-round-corner',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M21 11a8 8 0 0 0-8-8" />
    <svg:path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
  `,
})
export class LucideSquareRoundCorner {}
