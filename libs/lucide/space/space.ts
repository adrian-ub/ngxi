import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSpace],svg[lucide-space]',
  host: {
    class: 'lucide lucide-space',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: ` <svg:path d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" /> `,
})
export class LucideSpace {}
