import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFileSearch],svg[lucide-file-search]',
  host: {
    class: 'lucide lucide-file-search',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <svg:path
      d="M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"
    />
    <svg:path d="m9 18-1.5-1.5" />
    <svg:circle cx="5" cy="14" r="3" />
  `,
})
export class LucideFileSearch {}
