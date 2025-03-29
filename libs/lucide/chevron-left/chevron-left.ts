import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideChevronLeft],svg[lucide-chevron-left]',
  host: {
    class: 'lucide lucide-chevron-left',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: ` <svg:path d="m15 18-6-6 6-6" /> `,
})
export class LucideChevronLeft {}
