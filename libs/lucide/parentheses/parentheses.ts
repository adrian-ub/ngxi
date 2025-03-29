import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideParentheses],svg[lucide-parentheses]',
  host: {
    class: 'lucide lucide-parentheses',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M8 21s-4-3-4-9 4-9 4-9" />
    <svg:path d="M16 3s4 3 4 9-4 9-4 9" />
  `,
})
export class LucideParentheses {}
