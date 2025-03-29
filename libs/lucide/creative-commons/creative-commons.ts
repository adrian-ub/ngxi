import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCreativeCommons],svg[lucide-creative-commons]',
  host: {
    class: 'lucide lucide-creative-commons',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="10" />
    <svg:path
      d="M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"
    />
    <svg:path
      d="M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"
    />
  `,
})
export class LucideCreativeCommons {}
