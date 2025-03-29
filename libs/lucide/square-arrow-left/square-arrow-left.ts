import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSquareArrowLeft],svg[lucide-square-arrow-left]',
  host: {
    class: 'lucide lucide-square-arrow-left',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" />
    <svg:path d="m12 8-4 4 4 4" />
    <svg:path d="M16 12H8" />
  `,
})
export class LucideSquareArrowLeft {}
