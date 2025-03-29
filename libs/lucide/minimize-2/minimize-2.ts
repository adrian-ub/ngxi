import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMinimize2],svg[lucide-minimize-2]',
  host: {
    class: 'lucide lucide-minimize-2',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:polyline points="4 14 10 14 10 20" />
    <svg:polyline points="20 10 14 10 14 4" />
    <svg:line x1="14" x2="21" y1="10" y2="3" />
    <svg:line x1="3" x2="10" y1="21" y2="14" />
  `,
})
export class LucideMinimize2 {}
