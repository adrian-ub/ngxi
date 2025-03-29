import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSlash],svg[lucide-slash]',
  host: {
    class: 'lucide lucide-slash',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: ` <svg:path d="M22 2 2 22" /> `,
})
export class LucideSlash {}
