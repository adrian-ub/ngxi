import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideChevronsRight],svg[lucide-chevrons-right]',
  host: {
    class: 'lucide lucide-chevrons-right',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m6 17 5-5-5-5" />
    <svg:path d="m13 17 5-5-5-5" />
  `,
})
export class LucideChevronsRight {}
