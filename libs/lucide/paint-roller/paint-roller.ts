import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePaintRoller],svg[lucide-paint-roller]',
  host: {
    class: 'lucide lucide-paint-roller',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="16" height="6" x="2" y="2" rx="2" />
    <svg:path d="M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
    <svg:rect width="4" height="6" x="8" y="16" rx="1" />
  `,
})
export class LucidePaintRoller {}
