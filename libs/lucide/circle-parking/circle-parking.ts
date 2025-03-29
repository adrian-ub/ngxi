import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCircleParking],svg[lucide-circle-parking]',
  host: {
    class: 'lucide lucide-circle-parking',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="10" />
    <svg:path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
  `,
})
export class LucideCircleParking {}
