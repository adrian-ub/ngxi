import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideChevronsDown],svg[lucide-chevrons-down]',
  host: {
    class: 'lucide lucide-chevrons-down',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m7 6 5 5 5-5" />
    <svg:path d="m7 13 5 5 5-5" />
  `,
})
export class LucideChevronsDown {}
