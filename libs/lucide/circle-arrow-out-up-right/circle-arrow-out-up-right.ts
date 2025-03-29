import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideCircleArrowOutUpRight],svg[lucide-circle-arrow-out-up-right]',
  host: {
    class: 'lucide lucide-circle-arrow-out-up-right',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M22 12A10 10 0 1 1 12 2" />
    <svg:path d="M22 2 12 12" />
    <svg:path d="M16 2h6v6" />
  `,
})
export class LucideCircleArrowOutUpRight {}
