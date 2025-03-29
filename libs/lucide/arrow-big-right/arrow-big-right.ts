import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArrowBigRight],svg[lucide-arrow-big-right]',
  host: {
    class: 'lucide lucide-arrow-big-right',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: ` <svg:path d="M6 9h6V5l7 7-7 7v-4H6V9z" /> `,
})
export class LucideArrowBigRight {}
