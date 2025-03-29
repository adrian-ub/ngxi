import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArrowLeftToLine],svg[lucide-arrow-left-to-line]',
  host: {
    class: 'lucide lucide-arrow-left-to-line',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M3 19V5" />
    <svg:path d="m13 6-6 6 6 6" />
    <svg:path d="M7 12h14" />
  `,
})
export class LucideArrowLeftToLine {}
