import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCircleMinus],svg[lucide-circle-minus]',
  host: {
    class: 'lucide lucide-circle-minus',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="10" />
    <svg:path d="M8 12h8" />
  `,
})
export class LucideCircleMinus {}
