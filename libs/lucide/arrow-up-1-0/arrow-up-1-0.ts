import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArrowUp10],svg[lucide-arrow-up-1-0]',
  host: {
    class: 'lucide lucide-arrow-up-1-0',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m3 8 4-4 4 4" />
    <svg:path d="M7 4v16" />
    <svg:path d="M17 10V4h-2" />
    <svg:path d="M15 10h4" />
    <svg:rect x="15" y="14" width="4" height="6" ry="2" />
  `,
})
export class LucideArrowUp10 {}
