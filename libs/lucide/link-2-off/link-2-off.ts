import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLink2Off],svg[lucide-link-2-off]',
  host: {
    class: 'lucide lucide-link-2-off',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M9 17H7A5 5 0 0 1 7 7" />
    <svg:path d="M15 7h2a5 5 0 0 1 4 8" />
    <svg:line x1="8" x2="12" y1="12" y2="12" />
    <svg:line x1="2" x2="22" y1="2" y2="22" />
  `,
})
export class LucideLink2Off {}
