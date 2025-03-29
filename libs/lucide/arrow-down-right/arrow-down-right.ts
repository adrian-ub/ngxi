import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArrowDownRight],svg[lucide-arrow-down-right]',
  host: {
    class: 'lucide lucide-arrow-down-right',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m7 7 10 10" />
    <svg:path d="M17 7v10H7" />
  `,
})
export class LucideArrowDownRight {}
