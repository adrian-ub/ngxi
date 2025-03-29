import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArrowDownUp],svg[lucide-arrow-down-up]',
  host: {
    class: 'lucide lucide-arrow-down-up',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m3 16 4 4 4-4" />
    <svg:path d="M7 20V4" />
    <svg:path d="m21 8-4-4-4 4" />
    <svg:path d="M17 4v16" />
  `,
})
export class LucideArrowDownUp {}
