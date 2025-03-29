import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArrowBigUp],svg[lucide-arrow-big-up]',
  host: {
    class: 'lucide lucide-arrow-big-up',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: ` <svg:path d="M9 18v-6H5l7-7 7 7h-4v6H9z" /> `,
})
export class LucideArrowBigUp {}
