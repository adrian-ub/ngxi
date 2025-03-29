import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMountainSnow],svg[lucide-mountain-snow]',
  host: {
    class: 'lucide lucide-mountain-snow',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    <svg:path
      d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"
    />
  `,
})
export class LucideMountainSnow {}
