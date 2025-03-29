import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideNavigation2Off],svg[lucide-navigation-2-off]',
  host: {
    class: 'lucide lucide-navigation-2-off',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M9.31 9.31 5 21l7-4 7 4-1.17-3.17" />
    <svg:path d="M14.53 8.88 12 2l-1.17 3.17" />
    <svg:line x1="2" x2="22" y1="2" y2="22" />
  `,
})
export class LucideNavigation2Off {}
