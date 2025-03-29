import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideStretchVertical],svg[lucide-stretch-vertical]',
  host: {
    class: 'lucide lucide-stretch-vertical',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="6" height="20" x="4" y="2" rx="2" />
    <svg:rect width="6" height="20" x="14" y="2" rx="2" />
  `,
})
export class LucideStretchVertical {}
