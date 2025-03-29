import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideListX],svg[lucide-list-x]',
  host: {
    class: 'lucide lucide-list-x',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M11 12H3" />
    <svg:path d="M16 6H3" />
    <svg:path d="M16 18H3" />
    <svg:path d="m19 10-4 4" />
    <svg:path d="m15 10 4 4" />
  `,
})
export class LucideListX {}
