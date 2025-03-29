import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTurtle],svg[lucide-turtle]',
  host: {
    class: 'lucide lucide-turtle',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z"
    />
    <svg:path d="M4.82 7.9 8 10" />
    <svg:path d="M15.18 7.9 12 10" />
    <svg:path d="M16.93 10H20a2 2 0 0 1 0 4H2" />
  `,
})
export class LucideTurtle {}
