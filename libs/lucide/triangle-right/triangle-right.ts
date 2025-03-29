import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTriangleRight],svg[lucide-triangle-right]',
  host: {
    class: 'lucide lucide-triangle-right',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z"
    />
  `,
})
export class LucideTriangleRight {}
