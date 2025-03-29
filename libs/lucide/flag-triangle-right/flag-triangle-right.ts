import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFlagTriangleRight],svg[lucide-flag-triangle-right]',
  host: {
    class: 'lucide lucide-flag-triangle-right',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: ` <svg:path d="M7 22V2l10 5-10 5" /> `,
})
export class LucideFlagTriangleRight {}
