import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBadgeEuro],svg[lucide-badge-euro]',
  host: {
    class: 'lucide lucide-badge-euro',
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
    <svg:path d="M7 12h5" />
    <svg:path d="M15 9.4a4 4 0 1 0 0 5.2" />
  `,
})
export class LucideBadgeEuro {}
