import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFishSymbol],svg[lucide-fish-symbol]',
  host: {
    class: 'lucide lucide-fish-symbol',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: ` <svg:path d="M2 16s9-15 20-4C11 23 2 8 2 8" /> `,
})
export class LucideFishSymbol {}
