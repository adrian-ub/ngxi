import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideUtensils],svg[lucide-utensils]',
  host: {
    class: 'lucide lucide-utensils',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
    <svg:path d="M7 2v20" />
    <svg:path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
  `,
})
export class LucideUtensils {}
