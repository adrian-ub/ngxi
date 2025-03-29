import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideChevronRight],svg[lucide-chevron-right]',
  host: {
    class: 'lucide lucide-chevron-right',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: ` <svg:path d="m9 18 6-6-6-6" /> `,
})
export class LucideChevronRight {}
