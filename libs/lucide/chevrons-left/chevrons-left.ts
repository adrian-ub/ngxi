import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideChevronsLeft],svg[lucide-chevrons-left]',
  host: {
    class: 'lucide lucide-chevrons-left',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m11 17-5-5 5-5" />
    <svg:path d="m18 17-5-5 5-5" />
  `,
})
export class LucideChevronsLeft {}
