import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSquareCheck],svg[lucide-square-check]',
  host: {
    class: 'lucide lucide-square-check',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" />
    <svg:path d="m9 12 2 2 4-4" />
  `,
})
export class LucideSquareCheck {}
