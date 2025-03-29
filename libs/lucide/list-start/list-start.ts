import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideListStart],svg[lucide-list-start]',
  host: {
    class: 'lucide lucide-list-start',
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
    <svg:path d="M10 6H3" />
    <svg:path d="M21 18V8a2 2 0 0 0-2-2h-5" />
    <svg:path d="m16 8-2-2 2-2" />
  `,
})
export class LucideListStart {}
