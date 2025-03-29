import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTorus],svg[lucide-torus]',
  host: {
    class: 'lucide lucide-torus',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:ellipse cx="12" cy="11" rx="3" ry="2" />
    <svg:ellipse cx="12" cy="12.5" rx="10" ry="8.5" />
  `,
})
export class LucideTorus {}
