import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGrid2x2],svg[lucide-grid-2x2]',
  host: {
    class: 'lucide lucide-grid-2x2',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 3v18" />
    <svg:path d="M3 12h18" />
    <svg:rect x="3" y="3" width="18" height="18" rx="2" />
  `,
})
export class LucideGrid2x2 {}
