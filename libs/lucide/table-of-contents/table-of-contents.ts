import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTableOfContents],svg[lucide-table-of-contents]',
  host: {
    class: 'lucide lucide-table-of-contents',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M16 12H3" />
    <svg:path d="M16 18H3" />
    <svg:path d="M16 6H3" />
    <svg:path d="M21 12h.01" />
    <svg:path d="M21 18h.01" />
    <svg:path d="M21 6h.01" />
  `,
})
export class LucideTableOfContents {}
