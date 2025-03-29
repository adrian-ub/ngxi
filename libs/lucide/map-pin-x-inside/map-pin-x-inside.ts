import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMapPinXInside],svg[lucide-map-pin-x-inside]',
  host: {
    class: 'lucide lucide-map-pin-x-inside',
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
    <svg:path d="m14.5 7.5-5 5" />
    <svg:path d="m9.5 7.5 5 5" />
  `,
})
export class LucideMapPinXInside {}
