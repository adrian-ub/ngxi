import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBookmarkX],svg[lucide-bookmark-x]',
  host: {
    class: 'lucide lucide-bookmark-x',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" />
    <svg:path d="m14.5 7.5-5 5" />
    <svg:path d="m9.5 7.5 5 5" />
  `,
})
export class LucideBookmarkX {}
