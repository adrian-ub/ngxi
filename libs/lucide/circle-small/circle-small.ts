import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCircleSmall],svg[lucide-circle-small]',
  host: {
    class: 'lucide lucide-circle-small',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: ` <svg:circle cx="12" cy="12" r="6" /> `,
})
export class LucideCircleSmall {}
