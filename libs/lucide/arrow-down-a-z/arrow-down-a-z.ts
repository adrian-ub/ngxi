import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArrowDownAZ],svg[lucide-arrow-down-a-z]',
  host: {
    class: 'lucide lucide-arrow-down-a-z',
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
    <svg:path d="M20 8h-5" />
    <svg:path d="M15 10V6.5a2.5 2.5 0 0 1 5 0V10" />
    <svg:path d="M15 14h5l-5 6h5" />
  `,
})
export class LucideArrowDownAZ {}
