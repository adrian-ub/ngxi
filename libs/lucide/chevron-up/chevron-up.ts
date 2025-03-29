import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideChevronUp],svg[lucide-chevron-up]',
  host: {
    class: 'lucide lucide-chevron-up',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: ` <svg:path d="m18 15-6-6-6 6" /> `,
})
export class LucideChevronUp {}
