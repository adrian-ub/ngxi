import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRectangleHorizontal],svg[lucide-rectangle-horizontal]',
  host: {
    class: 'lucide lucide-rectangle-horizontal',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: ` <svg:rect width="20" height="12" x="2" y="6" rx="2" /> `,
})
export class LucideRectangleHorizontal {}
