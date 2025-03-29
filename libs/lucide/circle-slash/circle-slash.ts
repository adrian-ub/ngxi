import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCircleSlash],svg[lucide-circle-slash]',
  host: {
    class: 'lucide lucide-circle-slash',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="10" />
    <svg:line x1="9" x2="15" y1="15" y2="9" />
  `,
})
export class LucideCircleSlash {}
