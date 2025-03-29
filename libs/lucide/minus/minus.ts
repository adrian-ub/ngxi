import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMinus],svg[lucide-minus]',
  host: {
    class: 'lucide lucide-minus',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: ` <svg:path d="M5 12h14" /> `,
})
export class LucideMinus {}
