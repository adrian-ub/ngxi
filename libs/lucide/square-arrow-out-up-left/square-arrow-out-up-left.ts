import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideSquareArrowOutUpLeft],svg[lucide-square-arrow-out-up-left]',
  host: {
    class: 'lucide lucide-square-arrow-out-up-left',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6" />
    <svg:path d="m3 3 9 9" />
    <svg:path d="M3 9V3h6" />
  `,
})
export class LucideSquareArrowOutUpLeft {}
