import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideInfinity],svg[lucide-infinity]',
  host: {
    class: 'lucide lucide-infinity',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"
    />
  `,
})
export class LucideInfinity {}
