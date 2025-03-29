import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideListPlus],svg[lucide-list-plus]',
  host: {
    class: 'lucide lucide-list-plus',
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
    <svg:path d="M18 9v6" />
    <svg:path d="M21 12h-6" />
  `,
})
export class LucideListPlus {}
