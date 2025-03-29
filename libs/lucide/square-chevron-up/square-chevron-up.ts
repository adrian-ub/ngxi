import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSquareChevronUp],svg[lucide-square-chevron-up]',
  host: {
    class: 'lucide lucide-square-chevron-up',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" />
    <svg:path d="m8 14 4-4 4 4" />
  `,
})
export class LucideSquareChevronUp {}
