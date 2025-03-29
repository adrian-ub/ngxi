import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideSquareSplitHorizontal],svg[lucide-square-split-horizontal]',
  host: {
    class: 'lucide lucide-square-split-horizontal',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3" />
    <svg:path d="M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3" />
    <svg:line x1="12" x2="12" y1="4" y2="20" />
  `,
})
export class LucideSquareSplitHorizontal {}
