import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSlice],svg[lucide-slice]',
  host: {
    class: 'lucide lucide-slice',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M11 16.586V19a1 1 0 0 1-1 1H2L18.37 3.63a1 1 0 1 1 3 3l-9.663 9.663a1 1 0 0 1-1.414 0L8 14"
    />
  `,
})
export class LucideSlice {}
