import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideStretchHorizontal],svg[lucide-stretch-horizontal]',
  host: {
    class: 'lucide lucide-stretch-horizontal',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="20" height="6" x="2" y="4" rx="2" />
    <svg:rect width="20" height="6" x="2" y="14" rx="2" />
  `,
})
export class LucideStretchHorizontal {}
