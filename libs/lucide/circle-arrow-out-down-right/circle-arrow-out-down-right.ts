import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideCircleArrowOutDownRight],svg[lucide-circle-arrow-out-down-right]',
  host: {
    class: 'lucide lucide-circle-arrow-out-down-right',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 22a10 10 0 1 1 10-10" />
    <svg:path d="M22 22 12 12" />
    <svg:path d="M22 16v6h-6" />
  `,
})
export class LucideCircleArrowOutDownRight {}
