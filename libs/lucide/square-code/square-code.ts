import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSquareCode],svg[lucide-square-code]',
  host: {
    class: 'lucide lucide-square-code',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M10 9.5 8 12l2 2.5" />
    <svg:path d="m14 9.5 2 2.5-2 2.5" />
    <svg:rect width="18" height="18" x="3" y="3" rx="2" />
  `,
})
export class LucideSquareCode {}
