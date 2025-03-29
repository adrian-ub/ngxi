import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAmpersand],svg[lucide-ampersand]',
  host: {
    class: 'lucide lucide-ampersand',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13"
    />
    <svg:path d="M16 12h3" />
  `,
})
export class LucideAmpersand {}
