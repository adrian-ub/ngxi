import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCheckCheck],svg[lucide-check-check]',
  host: {
    class: 'lucide lucide-check-check',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M18 6 7 17l-5-5" />
    <svg:path d="m22 10-7.5 7.5L13 16" />
  `,
})
export class LucideCheckCheck {}
