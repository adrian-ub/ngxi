import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSquareArrowUp],svg[lucide-square-arrow-up]',
  host: {
    class: 'lucide lucide-square-arrow-up',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" />
    <svg:path d="m16 12-4-4-4 4" />
    <svg:path d="M12 16V8" />
  `,
})
export class LucideSquareArrowUp {}
