import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFramer],svg[lucide-framer]',
  host: {
    class: 'lucide lucide-framer',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: ` <svg:path d="M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7" /> `,
})
export class LucideFramer {}
