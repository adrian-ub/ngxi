import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideListCollapse],svg[lucide-list-collapse]',
  host: {
    class: 'lucide lucide-list-collapse',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m3 10 2.5-2.5L3 5" />
    <svg:path d="m3 19 2.5-2.5L3 14" />
    <svg:path d="M10 6h11" />
    <svg:path d="M10 12h11" />
    <svg:path d="M10 18h11" />
  `,
})
export class LucideListCollapse {}
