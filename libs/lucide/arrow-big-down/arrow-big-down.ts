import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArrowBigDown],svg[lucide-arrow-big-down]',
  host: {
    class: 'lucide lucide-arrow-big-down',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: ` <svg:path d="M15 6v6h4l-7 7-7-7h4V6h6z" /> `,
})
export class LucideArrowBigDown {}
