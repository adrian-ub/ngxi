import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMapPin],svg[lucide-map-pin]',
  host: {
    class: 'lucide lucide-map-pin',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
    />
    <svg:circle cx="12" cy="10" r="3" />
  `,
})
export class LucideMapPin {}
