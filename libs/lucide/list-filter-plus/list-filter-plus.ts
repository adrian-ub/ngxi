import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideListFilterPlus],svg[lucide-list-filter-plus]',
  host: {
    class: 'lucide lucide-list-filter-plus',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M10 18h4" />
    <svg:path d="M11 6H3" />
    <svg:path d="M15 6h6" />
    <svg:path d="M18 9V3" />
    <svg:path d="M7 12h8" />
  `,
})
export class LucideListFilterPlus {}
