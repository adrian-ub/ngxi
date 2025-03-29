import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSquareArrowDown],svg[lucide-square-arrow-down]',
  host: {
    class: 'lucide lucide-square-arrow-down',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" />
    <svg:path d="M12 8v8" />
    <svg:path d="m8 12 4 4 4-4" />
  `,
})
export class LucideSquareArrowDown {}
