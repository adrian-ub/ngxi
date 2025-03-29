import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideType],svg[lucide-type]',
  host: {
    class: 'lucide lucide-type',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:polyline points="4 7 4 4 20 4 20 7" />
    <svg:line x1="9" x2="15" y1="20" y2="20" />
    <svg:line x1="12" x2="12" y1="4" y2="20" />
  `,
})
export class LucideType {}
