import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMaximize2],svg[lucide-maximize-2]',
  host: {
    class: 'lucide lucide-maximize-2',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:polyline points="15 3 21 3 21 9" />
    <svg:polyline points="9 21 3 21 3 15" />
    <svg:line x1="21" x2="14" y1="3" y2="10" />
    <svg:line x1="3" x2="10" y1="21" y2="14" />
  `,
})
export class LucideMaximize2 {}
