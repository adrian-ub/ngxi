import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCode],svg[lucide-code]',
  host: {
    class: 'lucide lucide-code',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:polyline points="16 18 22 12 16 6" />
    <svg:polyline points="8 6 2 12 8 18" />
  `,
})
export class LucideCode {}
