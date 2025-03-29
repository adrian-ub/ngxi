import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTriangle],svg[lucide-triangle]',
  host: {
    class: 'lucide lucide-triangle',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
    />
  `,
})
export class LucideTriangle {}
