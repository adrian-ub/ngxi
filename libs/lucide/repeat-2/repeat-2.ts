import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRepeat2],svg[lucide-repeat-2]',
  host: {
    class: 'lucide lucide-repeat-2',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m2 9 3-3 3 3" />
    <svg:path d="M13 18H7a2 2 0 0 1-2-2V6" />
    <svg:path d="m22 15-3 3-3-3" />
    <svg:path d="M11 6h6a2 2 0 0 1 2 2v10" />
  `,
})
export class LucideRepeat2 {}
