import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBadgeAlert],svg[lucide-badge-alert]',
  host: {
    class: 'lucide lucide-badge-alert',
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
    <svg:line x1="12" x2="12" y1="8" y2="12" />
    <svg:line x1="12" x2="12.01" y1="16" y2="16" />
  `,
})
export class LucideBadgeAlert {}
