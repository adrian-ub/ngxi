import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBellDot],svg[lucide-bell-dot]',
  host: {
    class: 'lucide lucide-bell-dot',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M10.268 21a2 2 0 0 0 3.464 0" />
    <svg:path
      d="M13.916 2.314A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.74 7.327A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673 9 9 0 0 1-.585-.665"
    />
    <svg:circle cx="18" cy="8" r="3" />
  `,
})
export class LucideBellDot {}
