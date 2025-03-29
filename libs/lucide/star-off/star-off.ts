import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideStarOff],svg[lucide-star-off]',
  host: {
    class: 'lucide lucide-star-off',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43"
    />
    <svg:path d="M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91" />
    <svg:line x1="2" x2="22" y1="2" y2="22" />
  `,
})
export class LucideStarOff {}
