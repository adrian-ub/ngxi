import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideWrapText],svg[lucide-wrap-text]',
  host: {
    class: 'lucide lucide-wrap-text',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:line x1="3" x2="21" y1="6" y2="6" />
    <svg:path d="M3 12h15a3 3 0 1 1 0 6h-4" />
    <svg:polyline points="16 16 14 18 16 20" />
    <svg:line x1="3" x2="10" y1="18" y2="18" />
  `,
})
export class LucideWrapText {}
