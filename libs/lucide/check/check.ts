import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCheck],svg[lucide-check]',
  host: {
    class: 'lucide lucide-check',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: ` <svg:path d="M20 6 9 17l-5-5" /> `,
})
export class LucideCheck {}
