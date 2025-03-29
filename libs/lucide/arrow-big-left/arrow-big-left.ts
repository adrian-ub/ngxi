import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArrowBigLeft],svg[lucide-arrow-big-left]',
  host: {
    class: 'lucide lucide-arrow-big-left',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: ` <svg:path d="M18 15h-6v4l-7-7 7-7v4h6v6z" /> `,
})
export class LucideArrowBigLeft {}
