import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideEarth],svg[lucide-earth]',
  host: {
    class: 'lucide lucide-earth',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
    <svg:path
      d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"
    />
    <svg:path
      d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"
    />
    <svg:circle cx="12" cy="12" r="10" />
  `,
})
export class LucideEarth {}
