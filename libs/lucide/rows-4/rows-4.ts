import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRows4],svg[lucide-rows-4]',
  host: {
    class: 'lucide lucide-rows-4',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" />
    <svg:path d="M21 7.5H3" />
    <svg:path d="M21 12H3" />
    <svg:path d="M21 16.5H3" />
  `,
})
export class LucideRows4 {}
