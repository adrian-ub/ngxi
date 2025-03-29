import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSquareCheckBig],svg[lucide-square-check-big]',
  host: {
    class: 'lucide lucide-square-check-big',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5"
    />
    <svg:path d="m9 11 3 3L22 4" />
  `,
})
export class LucideSquareCheckBig {}
