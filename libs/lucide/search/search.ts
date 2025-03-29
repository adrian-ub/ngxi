import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSearch],svg[lucide-search]',
  host: {
    class: 'lucide lucide-search',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="11" cy="11" r="8" />
    <svg:path d="m21 21-4.3-4.3" />
  `,
})
export class LucideSearch {}
