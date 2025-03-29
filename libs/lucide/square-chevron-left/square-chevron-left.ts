import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSquareChevronLeft],svg[lucide-square-chevron-left]',
  host: {
    class: 'lucide lucide-square-chevron-left',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" />
    <svg:path d="m14 16-4-4 4-4" />
  `,
})
export class LucideSquareChevronLeft {}
