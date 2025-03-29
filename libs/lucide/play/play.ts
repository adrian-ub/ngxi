import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePlay],svg[lucide-play]',
  host: {
    class: 'lucide lucide-play',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: ` <svg:polygon points="6 3 20 12 6 21 6 3" /> `,
})
export class LucidePlay {}
