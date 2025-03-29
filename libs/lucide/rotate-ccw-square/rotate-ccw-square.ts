import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRotateCcwSquare],svg[lucide-rotate-ccw-square]',
  host: {
    class: 'lucide lucide-rotate-ccw-square',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M20 9V7a2 2 0 0 0-2-2h-6" />
    <svg:path d="m15 2-3 3 3 3" />
    <svg:path d="M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2" />
  `,
})
export class LucideRotateCcwSquare {}
