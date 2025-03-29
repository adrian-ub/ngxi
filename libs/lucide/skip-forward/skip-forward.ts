import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSkipForward],svg[lucide-skip-forward]',
  host: {
    class: 'lucide lucide-skip-forward',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:polygon points="5 4 15 12 5 20 5 4" />
    <svg:line x1="19" x2="19" y1="5" y2="19" />
  `,
})
export class LucideSkipForward {}
