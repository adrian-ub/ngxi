import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArrowRightLeft],svg[lucide-arrow-right-left]',
  host: {
    class: 'lucide lucide-arrow-right-left',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m16 3 4 4-4 4" />
    <svg:path d="M20 7H4" />
    <svg:path d="m8 21-4-4 4-4" />
    <svg:path d="M4 17h16" />
  `,
})
export class LucideArrowRightLeft {}
