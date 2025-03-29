import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMountain],svg[lucide-mountain]',
  host: {
    class: 'lucide lucide-mountain',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: ` <svg:path d="m8 3 4 8 5-5 5 15H2L8 3z" /> `,
})
export class LucideMountain {}
