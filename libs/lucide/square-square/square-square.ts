import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSquareSquare],svg[lucide-square-square]',
  host: {
    class: 'lucide lucide-square-square',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect x="3" y="3" width="18" height="18" rx="2" />
    <svg:rect x="8" y="8" width="8" height="8" rx="1" />
  `,
})
export class LucideSquareSquare {}
