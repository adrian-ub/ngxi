import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSquareRadical],svg[lucide-square-radical]',
  host: {
    class: 'lucide lucide-square-radical',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M7 12h2l2 5 2-10h4" />
    <svg:rect x="3" y="3" width="18" height="18" rx="2" />
  `,
})
export class LucideSquareRadical {}
