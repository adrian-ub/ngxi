import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArrowUpDown],svg[lucide-arrow-up-down]',
  host: {
    class: 'lucide lucide-arrow-up-down',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m21 16-4 4-4-4" />
    <svg:path d="M17 20V4" />
    <svg:path d="m3 8 4-4 4 4" />
    <svg:path d="M7 4v16" />
  `,
})
export class LucideArrowUpDown {}
