import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArrowRight],svg[lucide-arrow-right]',
  host: {
    class: 'lucide lucide-arrow-right',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M5 12h14" />
    <svg:path d="m12 5 7 7-7 7" />
  `,
})
export class LucideArrowRight {}
