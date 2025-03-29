import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideChevronsDownUp],svg[lucide-chevrons-down-up]',
  host: {
    class: 'lucide lucide-chevrons-down-up',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m7 20 5-5 5 5" />
    <svg:path d="m7 4 5 5 5-5" />
  `,
})
export class LucideChevronsDownUp {}
