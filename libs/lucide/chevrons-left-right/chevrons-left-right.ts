import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideChevronsLeftRight],svg[lucide-chevrons-left-right]',
  host: {
    class: 'lucide lucide-chevrons-left-right',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m9 7-5 5 5 5" />
    <svg:path d="m15 7 5 5-5 5" />
  `,
})
export class LucideChevronsLeftRight {}
