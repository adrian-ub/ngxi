import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCircleOff],svg[lucide-circle-off]',
  host: {
    class: 'lucide lucide-circle-off',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m2 2 20 20" />
    <svg:path d="M8.35 2.69A10 10 0 0 1 21.3 15.65" />
    <svg:path d="M19.08 19.08A10 10 0 1 1 4.92 4.92" />
  `,
})
export class LucideCircleOff {}
