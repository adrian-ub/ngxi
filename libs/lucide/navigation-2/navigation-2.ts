import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideNavigation2],svg[lucide-navigation-2]',
  host: {
    class: 'lucide lucide-navigation-2',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: ` <svg:polygon points="12 2 19 21 12 17 5 21 12 2" /> `,
})
export class LucideNavigation2 {}
