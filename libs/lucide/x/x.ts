import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideX],svg[lucide-x]',
  host: {
    class: 'lucide lucide-x',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M18 6 6 18" />
    <svg:path d="m6 6 12 12" />
  `,
})
export class LucideX {}
