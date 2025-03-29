import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBadgeX],svg[lucide-badge-x]',
  host: {
    class: 'lucide lucide-badge-x',
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
    <svg:line x1="15" x2="9" y1="9" y2="15" />
    <svg:line x1="9" x2="15" y1="9" y2="15" />
  `,
})
export class LucideBadgeX {}
