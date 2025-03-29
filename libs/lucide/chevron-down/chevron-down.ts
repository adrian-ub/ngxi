import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideChevronDown],svg[lucide-chevron-down]',
  host: {
    class: 'lucide lucide-chevron-down',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: ` <svg:path d="m6 9 6 6 6-6" /> `,
})
export class LucideChevronDown {}
