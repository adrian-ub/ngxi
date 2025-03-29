import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideSquareArrowOutUpRight],svg[lucide-square-arrow-out-up-right]',
  host: {
    class: 'lucide lucide-square-arrow-out-up-right',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
    <svg:path d="m21 3-9 9" />
    <svg:path d="M15 3h6v6" />
  `,
})
export class LucideSquareArrowOutUpRight {}
