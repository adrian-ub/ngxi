import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArrowBigRightDash],svg[lucide-arrow-big-right-dash]',
  host: {
    class: 'lucide lucide-arrow-big-right-dash',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M5 9v6" />
    <svg:path d="M9 9h3V5l7 7-7 7v-4H9V9z" />
  `,
})
export class LucideArrowBigRightDash {}
