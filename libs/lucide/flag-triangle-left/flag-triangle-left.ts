import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFlagTriangleLeft],svg[lucide-flag-triangle-left]',
  host: {
    class: 'lucide lucide-flag-triangle-left',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: ` <svg:path d="M17 22V2L7 7l10 5" /> `,
})
export class LucideFlagTriangleLeft {}
