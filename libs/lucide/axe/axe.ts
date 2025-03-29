import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAxe],svg[lucide-axe]',
  host: {
    class: 'lucide lucide-axe',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9" />
    <svg:path d="M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z" />
  `,
})
export class LucideAxe {}
