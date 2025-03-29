import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideChevronFirst],svg[lucide-chevron-first]',
  host: {
    class: 'lucide lucide-chevron-first',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m17 18-6-6 6-6" />
    <svg:path d="M7 6v12" />
  `,
})
export class LucideChevronFirst {}
