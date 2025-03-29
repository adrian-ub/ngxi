import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideChevronsUpDown],svg[lucide-chevrons-up-down]',
  host: {
    class: 'lucide lucide-chevrons-up-down',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m7 15 5 5 5-5" />
    <svg:path d="m7 9 5-5 5 5" />
  `,
})
export class LucideChevronsUpDown {}
