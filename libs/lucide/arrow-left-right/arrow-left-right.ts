import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArrowLeftRight],svg[lucide-arrow-left-right]',
  host: {
    class: 'lucide lucide-arrow-left-right',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M8 3 4 7l4 4" />
    <svg:path d="M4 7h16" />
    <svg:path d="m16 21 4-4-4-4" />
    <svg:path d="M20 17H4" />
  `,
})
export class LucideArrowLeftRight {}
