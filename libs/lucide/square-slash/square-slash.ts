import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSquareSlash],svg[lucide-square-slash]',
  host: {
    class: 'lucide lucide-square-slash',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" />
    <svg:line x1="9" x2="15" y1="15" y2="9" />
  `,
})
export class LucideSquareSlash {}
