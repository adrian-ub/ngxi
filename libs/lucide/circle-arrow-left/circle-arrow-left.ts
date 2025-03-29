import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCircleArrowLeft],svg[lucide-circle-arrow-left]',
  host: {
    class: 'lucide lucide-circle-arrow-left',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="10" />
    <svg:path d="M16 12H8" />
    <svg:path d="m12 8-4 4 4 4" />
  `,
})
export class LucideCircleArrowLeft {}
