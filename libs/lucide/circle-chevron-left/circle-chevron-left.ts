import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCircleChevronLeft],svg[lucide-circle-chevron-left]',
  host: {
    class: 'lucide lucide-circle-chevron-left',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="10" />
    <svg:path d="m14 16-4-4 4-4" />
  `,
})
export class LucideCircleChevronLeft {}
