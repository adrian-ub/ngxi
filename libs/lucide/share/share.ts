import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideShare],svg[lucide-share]',
  host: {
    class: 'lucide lucide-share',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    <svg:polyline points="16 6 12 2 8 6" />
    <svg:line x1="12" x2="12" y1="2" y2="15" />
  `,
})
export class LucideShare {}
