import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArrowUpRight],svg[lucide-arrow-up-right]',
  host: {
    class: 'lucide lucide-arrow-up-right',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M7 7h10v10" />
    <svg:path d="M7 17 17 7" />
  `,
})
export class LucideArrowUpRight {}
