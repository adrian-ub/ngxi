import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideDatabase],svg[lucide-database]',
  host: {
    class: 'lucide lucide-database',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:ellipse cx="12" cy="5" rx="9" ry="3" />
    <svg:path d="M3 5V19A9 3 0 0 0 21 19V5" />
    <svg:path d="M3 12A9 3 0 0 0 21 12" />
  `,
})
export class LucideDatabase {}
