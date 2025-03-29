import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideListCheck],svg[lucide-list-check]',
  host: {
    class: 'lucide lucide-list-check',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M11 18H3" />
    <svg:path d="m15 18 2 2 4-4" />
    <svg:path d="M16 12H3" />
    <svg:path d="M16 6H3" />
  `,
})
export class LucideListCheck {}
