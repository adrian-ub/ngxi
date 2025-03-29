import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRectangleVertical],svg[lucide-rectangle-vertical]',
  host: {
    class: 'lucide lucide-rectangle-vertical',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: ` <svg:rect width="12" height="20" x="6" y="2" rx="2" /> `,
})
export class LucideRectangleVertical {}
