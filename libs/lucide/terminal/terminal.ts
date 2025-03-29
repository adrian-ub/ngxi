import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTerminal],svg[lucide-terminal]',
  host: {
    class: 'lucide lucide-terminal',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:polyline points="4 17 10 11 4 5" />
    <svg:line x1="12" x2="20" y1="19" y2="19" />
  `,
})
export class LucideTerminal {}
