import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideCircleArrowOutDownLeft],svg[lucide-circle-arrow-out-down-left]',
  host: {
    class: 'lucide lucide-circle-arrow-out-down-left',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M2 12a10 10 0 1 1 10 10" />
    <svg:path d="m2 22 10-10" />
    <svg:path d="M8 22H2v-6" />
  `,
})
export class LucideCircleArrowOutDownLeft {}
