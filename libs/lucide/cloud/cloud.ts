import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCloud],svg[lucide-cloud]',
  host: {
    class: 'lucide lucide-cloud',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
  `,
})
export class LucideCloud {}
