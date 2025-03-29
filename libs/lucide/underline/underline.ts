import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideUnderline],svg[lucide-underline]',
  host: {
    class: 'lucide lucide-underline',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M6 4v6a6 6 0 0 0 12 0V4" />
    <svg:line x1="4" x2="20" y1="20" y2="20" />
  `,
})
export class LucideUnderline {}
