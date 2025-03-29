import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideChevronsUp],svg[lucide-chevrons-up]',
  host: {
    class: 'lucide lucide-chevrons-up',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m17 11-5-5-5 5" />
    <svg:path d="m17 18-5-5-5 5" />
  `,
})
export class LucideChevronsUp {}
