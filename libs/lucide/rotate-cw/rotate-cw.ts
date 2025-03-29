import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRotateCw],svg[lucide-rotate-cw]',
  host: {
    class: 'lucide lucide-rotate-cw',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
    <svg:path d="M21 3v5h-5" />
  `,
})
export class LucideRotateCw {}
