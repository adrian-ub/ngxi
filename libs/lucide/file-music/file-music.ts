import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFileMusic],svg[lucide-file-music]',
  host: {
    class: 'lucide lucide-file-music',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M10.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v8.4" />
    <svg:path d="M8 18v-7.7L16 9v7" />
    <svg:circle cx="14" cy="16" r="2" />
    <svg:circle cx="6" cy="18" r="2" />
  `,
})
export class LucideFileMusic {}
