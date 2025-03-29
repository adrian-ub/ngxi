import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTent],svg[lucide-tent]',
  host: {
    class: 'lucide lucide-tent',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M3.5 21 14 3" />
    <svg:path d="M20.5 21 10 3" />
    <svg:path d="M15.5 21 12 15l-3.5 6" />
    <svg:path d="M2 21h20" />
  `,
})
export class LucideTent {}
