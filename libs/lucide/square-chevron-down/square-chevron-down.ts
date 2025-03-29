import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSquareChevronDown],svg[lucide-square-chevron-down]',
  host: {
    class: 'lucide lucide-square-chevron-down',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" />
    <svg:path d="m16 10-4 4-4-4" />
  `,
})
export class LucideSquareChevronDown {}
