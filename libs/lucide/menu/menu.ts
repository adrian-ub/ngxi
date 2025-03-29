import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMenu],svg[lucide-menu]',
  host: {
    class: 'lucide lucide-menu',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:line x1="4" x2="20" y1="12" y2="12" />
    <svg:line x1="4" x2="20" y1="6" y2="6" />
    <svg:line x1="4" x2="20" y1="18" y2="18" />
  `,
})
export class LucideMenu {}
