import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFileSearch2],svg[lucide-file-search-2]',
  host: {
    class: 'lucide lucide-file-search-2',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <svg:path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <svg:circle cx="11.5" cy="14.5" r="2.5" />
    <svg:path d="M13.3 16.3 15 18" />
  `,
})
export class LucideFileSearch2 {}
