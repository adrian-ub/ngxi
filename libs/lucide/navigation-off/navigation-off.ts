import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideNavigationOff],svg[lucide-navigation-off]',
  host: {
    class: 'lucide lucide-navigation-off',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M8.43 8.43 3 11l8 2 2 8 2.57-5.43" />
    <svg:path d="M17.39 11.73 22 2l-9.73 4.61" />
    <svg:line x1="2" x2="22" y1="2" y2="22" />
  `,
})
export class LucideNavigationOff {}
