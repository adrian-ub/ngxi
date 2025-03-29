import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAlignEndHorizontal],svg[lucide-align-end-horizontal]',
  host: {
    class: 'lucide lucide-align-end-horizontal',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="6" height="16" x="4" y="2" rx="2" />
    <svg:rect width="6" height="9" x="14" y="9" rx="2" />
    <svg:path d="M22 22H2" />
  `,
})
export class LucideAlignEndHorizontal {}
