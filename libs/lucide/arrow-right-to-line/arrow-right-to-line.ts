import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArrowRightToLine],svg[lucide-arrow-right-to-line]',
  host: {
    class: 'lucide lucide-arrow-right-to-line',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M17 12H3" />
    <svg:path d="m11 18 6-6-6-6" />
    <svg:path d="M21 5v14" />
  `,
})
export class LucideArrowRightToLine {}
