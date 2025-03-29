import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBeanOff],svg[lucide-bean-off]',
  host: {
    class: 'lucide lucide-bean-off',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1"
    />
    <svg:path d="M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66" />
    <svg:path
      d="M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04"
    />
    <svg:line x1="2" x2="22" y1="2" y2="22" />
  `,
})
export class LucideBeanOff {}
