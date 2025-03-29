import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArrowDownZA],svg[lucide-arrow-down-z-a]',
  host: {
    class: 'lucide lucide-arrow-down-z-a',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m3 16 4 4 4-4" />
    <svg:path d="M7 4v16" />
    <svg:path d="M15 4h5l-5 6h5" />
    <svg:path d="M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" />
    <svg:path d="M20 18h-5" />
  `,
})
export class LucideArrowDownZA {}
