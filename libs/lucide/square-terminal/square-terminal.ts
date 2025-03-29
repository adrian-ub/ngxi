import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSquareTerminal],svg[lucide-square-terminal]',
  host: {
    class: 'lucide lucide-square-terminal',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m7 11 2-2-2-2" />
    <svg:path d="M11 13h4" />
    <svg:rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
  `,
})
export class LucideSquareTerminal {}
