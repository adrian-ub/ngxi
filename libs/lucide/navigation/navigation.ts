import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideNavigation],svg[lucide-navigation]',
  host: {
    class: 'lucide lucide-navigation',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: ` <svg:polygon points="3 11 22 2 13 21 11 13 3 11" /> `,
})
export class LucideNavigation {}
