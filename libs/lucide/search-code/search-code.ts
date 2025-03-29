import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSearchCode],svg[lucide-search-code]',
  host: {
    class: 'lucide lucide-search-code',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m13 13.5 2-2.5-2-2.5" />
    <svg:path d="m21 21-4.3-4.3" />
    <svg:path d="M9 8.5 7 11l2 2.5" />
    <svg:circle cx="11" cy="11" r="8" />
  `,
})
export class LucideSearchCode {}
