import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideListTree],svg[lucide-list-tree]',
  host: {
    class: 'lucide lucide-list-tree',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M21 12h-8" />
    <svg:path d="M21 6H8" />
    <svg:path d="M21 18h-8" />
    <svg:path d="M3 6v4c0 1.1.9 2 2 2h3" />
    <svg:path d="M3 10v6c0 1.1.9 2 2 2h3" />
  `,
})
export class LucideListTree {}
