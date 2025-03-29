import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBookMarked],svg[lucide-book-marked]',
  host: {
    class: 'lucide lucide-book-marked',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M10 2v8l3-3 3 3V2" />
    <svg:path
      d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
    />
  `,
})
export class LucideBookMarked {}
