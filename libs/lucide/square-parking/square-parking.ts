import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSquareParking],svg[lucide-square-parking]',
  host: {
    class: 'lucide lucide-square-parking',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" />
    <svg:path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
  `,
})
export class LucideSquareParking {}
