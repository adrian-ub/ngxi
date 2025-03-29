import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSquareArrowUpLeft],svg[lucide-square-arrow-up-left]',
  host: {
    class: 'lucide lucide-square-arrow-up-left',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" />
    <svg:path d="M8 16V8h8" />
    <svg:path d="M16 16 8 8" />
  `,
})
export class LucideSquareArrowUpLeft {}
