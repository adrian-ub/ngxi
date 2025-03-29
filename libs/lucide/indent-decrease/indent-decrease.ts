import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideIndentDecrease],svg[lucide-indent-decrease]',
  host: {
    class: 'lucide lucide-indent-decrease',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M21 12H11" />
    <svg:path d="M21 18H11" />
    <svg:path d="M21 6H11" />
    <svg:path d="m7 8-4 4 4 4" />
  `,
})
export class LucideIndentDecrease {}
