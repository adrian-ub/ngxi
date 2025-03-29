import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideDot],svg[lucide-dot]',
  host: {
    class: 'lucide lucide-dot',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: ` <svg:circle cx="12.1" cy="12.1" r="1" /> `,
})
export class LucideDot {}
