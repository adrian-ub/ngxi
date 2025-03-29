import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideSquareArrowOutDownRight],svg[lucide-square-arrow-out-down-right]',
  host: {
    class: 'lucide lucide-square-arrow-out-down-right',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
    <svg:path d="m21 21-9-9" />
    <svg:path d="M21 15v6h-6" />
  `,
})
export class LucideSquareArrowOutDownRight {}
