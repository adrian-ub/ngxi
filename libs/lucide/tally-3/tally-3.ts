import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTally3],svg[lucide-tally-3]',
  host: {
    class: 'lucide lucide-tally-3',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M4 4v16" />
    <svg:path d="M9 4v16" />
    <svg:path d="M14 4v16" />
  `,
})
export class LucideTally3 {}
