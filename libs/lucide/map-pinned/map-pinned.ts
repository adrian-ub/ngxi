import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMapPinned],svg[lucide-map-pinned]',
  host: {
    class: 'lucide lucide-map-pinned',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"
    />
    <svg:circle cx="12" cy="8" r="2" />
    <svg:path
      d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"
    />
  `,
})
export class LucideMapPinned {}
