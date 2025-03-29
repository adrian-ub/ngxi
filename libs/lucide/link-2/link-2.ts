import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLink2],svg[lucide-link-2]',
  host: {
    class: 'lucide lucide-link-2',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M9 17H7A5 5 0 0 1 7 7h2" />
    <svg:path d="M15 7h2a5 5 0 1 1 0 10h-2" />
    <svg:line x1="8" x2="16" y1="12" y2="12" />
  `,
})
export class LucideLink2 {}
