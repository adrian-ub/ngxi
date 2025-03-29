import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAlignCenter],svg[lucide-align-center]',
  host: {
    class: 'lucide lucide-align-center',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M17 12H7" />
    <svg:path d="M19 18H5" />
    <svg:path d="M21 6H3" />
  `,
})
export class LucideAlignCenter {}
