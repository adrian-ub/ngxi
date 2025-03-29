import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideDollarSign],svg[lucide-dollar-sign]',
  host: {
    class: 'lucide lucide-dollar-sign',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:line x1="12" x2="12" y1="2" y2="22" />
    <svg:path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  `,
})
export class LucideDollarSign {}
