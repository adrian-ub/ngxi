import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideListOrdered],svg[lucide-list-ordered]',
  host: {
    class: 'lucide lucide-list-ordered',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M10 12h11" />
    <svg:path d="M10 18h11" />
    <svg:path d="M10 6h11" />
    <svg:path d="M4 10h2" />
    <svg:path d="M4 6h1v4" />
    <svg:path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
  `,
})
export class LucideListOrdered {}
