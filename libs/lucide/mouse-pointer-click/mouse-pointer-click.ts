import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMousePointerClick],svg[lucide-mouse-pointer-click]',
  host: {
    class: 'lucide lucide-mouse-pointer-click',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M14 4.1 12 6" />
    <svg:path d="m5.1 8-2.9-.8" />
    <svg:path d="m6 12-1.9 2" />
    <svg:path d="M7.2 2.2 8 5.1" />
    <svg:path
      d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"
    />
  `,
})
export class LucideMousePointerClick {}
