import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMapPinMinus],svg[lucide-map-pin-minus]',
  host: {
    class: 'lucide lucide-map-pin-minus',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M18.977 14C19.6 12.701 20 11.343 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738"
    />
    <svg:circle cx="12" cy="10" r="3" />
    <svg:path d="M16 18h6" />
  `,
})
export class LucideMapPinMinus {}
