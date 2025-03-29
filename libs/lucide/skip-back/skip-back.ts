import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSkipBack],svg[lucide-skip-back]',
  host: {
    class: 'lucide lucide-skip-back',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:polygon points="19 20 9 12 19 4 19 20" />
    <svg:line x1="5" x2="5" y1="19" y2="5" />
  `,
})
export class LucideSkipBack {}
