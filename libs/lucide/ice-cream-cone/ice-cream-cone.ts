import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideIceCreamCone],svg[lucide-ice-cream-cone]',
  host: {
    class: 'lucide lucide-ice-cream-cone',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11" />
    <svg:path d="M17 7A5 5 0 0 0 7 7" />
    <svg:path d="M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4" />
  `,
})
export class LucideIceCreamCone {}
