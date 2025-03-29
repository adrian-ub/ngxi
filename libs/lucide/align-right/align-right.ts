import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAlignRight],svg[lucide-align-right]',
  host: {
    class: 'lucide lucide-align-right',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M21 12H9" />
    <svg:path d="M21 18H7" />
    <svg:path d="M21 6H3" />
  `,
})
export class LucideAlignRight {}
