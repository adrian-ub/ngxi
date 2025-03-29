import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGem],svg[lucide-gem]',
  host: {
    class: 'lucide lucide-gem',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M6 3h12l4 6-10 13L2 9Z" />
    <svg:path d="M11 3 8 9l4 13 4-13-3-6" />
    <svg:path d="M2 9h20" />
  `,
})
export class LucideGem {}
