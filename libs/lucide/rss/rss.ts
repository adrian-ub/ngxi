import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRss],svg[lucide-rss]',
  host: {
    class: 'lucide lucide-rss',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M4 11a9 9 0 0 1 9 9" />
    <svg:path d="M4 4a16 16 0 0 1 16 16" />
    <svg:circle cx="5" cy="19" r="1" />
  `,
})
export class LucideRss {}
