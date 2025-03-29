import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideList],svg[lucide-list]',
  host: {
    class: 'lucide lucide-list',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M3 12h.01" />
    <svg:path d="M3 18h.01" />
    <svg:path d="M3 6h.01" />
    <svg:path d="M8 12h13" />
    <svg:path d="M8 18h13" />
    <svg:path d="M8 6h13" />
  `,
})
export class LucideList {}
