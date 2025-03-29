import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBuilding2],svg[lucide-building-2]',
  host: {
    class: 'lucide lucide-building-2',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
    <svg:path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
    <svg:path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
    <svg:path d="M10 6h4" />
    <svg:path d="M10 10h4" />
    <svg:path d="M10 14h4" />
    <svg:path d="M10 18h4" />
  `,
})
export class LucideBuilding2 {}
