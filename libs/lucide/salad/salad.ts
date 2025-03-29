import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSalad],svg[lucide-salad]',
  host: {
    class: 'lucide lucide-salad',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M7 21h10" />
    <svg:path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" />
    <svg:path
      d="M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1"
    />
    <svg:path d="m13 12 4-4" />
    <svg:path d="M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2" />
  `,
})
export class LucideSalad {}
