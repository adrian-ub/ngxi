import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRailSymbol],svg[lucide-rail-symbol]',
  host: {
    class: 'lucide lucide-rail-symbol',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M5 15h14" />
    <svg:path d="M5 9h14" />
    <svg:path d="m14 20-5-5 6-6-5-5" />
  `,
})
export class LucideRailSymbol {}
