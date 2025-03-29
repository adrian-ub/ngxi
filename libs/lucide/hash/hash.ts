import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideHash],svg[lucide-hash]',
  host: {
    class: 'lucide lucide-hash',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:line x1="4" x2="20" y1="9" y2="9" />
    <svg:line x1="4" x2="20" y1="15" y2="15" />
    <svg:line x1="10" x2="8" y1="3" y2="21" />
    <svg:line x1="16" x2="14" y1="3" y2="21" />
  `,
})
export class LucideHash {}
