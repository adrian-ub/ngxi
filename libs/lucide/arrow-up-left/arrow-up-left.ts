import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArrowUpLeft],svg[lucide-arrow-up-left]',
  host: {
    class: 'lucide lucide-arrow-up-left',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M7 17V7h10" />
    <svg:path d="M17 17 7 7" />
  `,
})
export class LucideArrowUpLeft {}
