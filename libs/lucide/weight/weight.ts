import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideWeight],svg[lucide-weight]',
  host: {
    class: 'lucide lucide-weight',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="5" r="3" />
    <svg:path
      d="M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"
    />
  `,
})
export class LucideWeight {}
