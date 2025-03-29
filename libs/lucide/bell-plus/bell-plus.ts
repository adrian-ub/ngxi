import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBellPlus],svg[lucide-bell-plus]',
  host: {
    class: 'lucide lucide-bell-plus',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M10.268 21a2 2 0 0 0 3.464 0" />
    <svg:path d="M15 8h6" />
    <svg:path d="M18 5v6" />
    <svg:path
      d="M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332"
    />
  `,
})
export class LucideBellPlus {}
