import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideZoomOut],svg[lucide-zoom-out]',
  host: {
    class: 'lucide lucide-zoom-out',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="11" cy="11" r="8" />
    <svg:line x1="21" x2="16.65" y1="21" y2="16.65" />
    <svg:line x1="8" x2="14" y1="11" y2="11" />
  `,
})
export class LucideZoomOut {}
