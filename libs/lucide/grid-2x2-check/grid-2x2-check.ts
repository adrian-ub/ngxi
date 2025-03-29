import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGrid2x2Check],svg[lucide-grid-2x2-check]',
  host: {
    class: 'lucide lucide-grid-2x2-check',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"
    />
    <svg:path d="m16 19 2 2 4-4" />
  `,
})
export class LucideGrid2x2Check {}
