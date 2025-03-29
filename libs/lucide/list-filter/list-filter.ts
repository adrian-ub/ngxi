import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideListFilter],svg[lucide-list-filter]',
  host: {
    class: 'lucide lucide-list-filter',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M3 6h18" />
    <svg:path d="M7 12h10" />
    <svg:path d="M10 18h4" />
  `,
})
export class LucideListFilter {}
