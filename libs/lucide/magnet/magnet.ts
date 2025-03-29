import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMagnet],svg[lucide-magnet]',
  host: {
    class: 'lucide lucide-magnet',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15"
    />
    <svg:path d="m5 8 4 4" />
    <svg:path d="m12 15 4 4" />
  `,
})
export class LucideMagnet {}
