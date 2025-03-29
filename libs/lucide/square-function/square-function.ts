import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSquareFunction],svg[lucide-square-function]',
  host: {
    class: 'lucide lucide-square-function',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <svg:path d="M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3" />
    <svg:path d="M9 11.2h5.7" />
  `,
})
export class LucideSquareFunction {}
