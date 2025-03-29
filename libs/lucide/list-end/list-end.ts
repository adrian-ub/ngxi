import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideListEnd],svg[lucide-list-end]',
  host: {
    class: 'lucide lucide-list-end',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M16 12H3" />
    <svg:path d="M16 6H3" />
    <svg:path d="M10 18H3" />
    <svg:path d="M21 6v10a2 2 0 0 1-2 2h-5" />
    <svg:path d="m16 16-2 2 2 2" />
  `,
})
export class LucideListEnd {}
