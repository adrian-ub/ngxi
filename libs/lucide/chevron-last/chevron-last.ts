import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideChevronLast],svg[lucide-chevron-last]',
  host: {
    class: 'lucide lucide-chevron-last',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m7 18 6-6-6-6" />
    <svg:path d="M17 6v12" />
  `,
})
export class LucideChevronLast {}
