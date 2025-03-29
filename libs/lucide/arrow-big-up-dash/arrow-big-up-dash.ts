import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArrowBigUpDash],svg[lucide-arrow-big-up-dash]',
  host: {
    class: 'lucide lucide-arrow-big-up-dash',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M9 19h6" />
    <svg:path d="M9 15v-3H5l7-7 7 7h-4v3H9z" />
  `,
})
export class LucideArrowBigUpDash {}
