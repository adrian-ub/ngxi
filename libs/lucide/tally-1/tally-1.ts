import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTally1],svg[lucide-tally-1]',
  host: {
    class: 'lucide lucide-tally-1',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: ` <svg:path d="M4 4v16" /> `,
})
export class LucideTally1 {}
