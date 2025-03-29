import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBadgePoundSterling],svg[lucide-badge-pound-sterling]',
  host: {
    class: 'lucide lucide-badge-pound-sterling',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
    />
    <svg:path d="M8 12h4" />
    <svg:path d="M10 16V9.5a2.5 2.5 0 0 1 5 0" />
    <svg:path d="M8 16h7" />
  `,
})
export class LucideBadgePoundSterling {}
