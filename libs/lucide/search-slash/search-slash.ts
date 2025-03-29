import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSearchSlash],svg[lucide-search-slash]',
  host: {
    class: 'lucide lucide-search-slash',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m13.5 8.5-5 5" />
    <svg:circle cx="11" cy="11" r="8" />
    <svg:path d="m21 21-4.3-4.3" />
  `,
})
export class LucideSearchSlash {}
