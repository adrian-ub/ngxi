import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideApple],svg[lucide-apple]',
  host: {
    class: 'lucide lucide-apple',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"
    />
    <svg:path d="M10 2c1 .5 2 2 2 5" />
  `,
})
export class LucideApple {}
