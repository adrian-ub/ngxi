import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideForward],svg[lucide-forward]',
  host: {
    class: 'lucide lucide-forward',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:polyline points="15 17 20 12 15 7" />
    <svg:path d="M4 18v-2a4 4 0 0 1 4-4h12" />
  `,
})
export class LucideForward {}
