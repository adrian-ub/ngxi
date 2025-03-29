import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBookmarkCheck],svg[lucide-bookmark-check]',
  host: {
    class: 'lucide lucide-bookmark-check',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" />
    <svg:path d="m9 10 2 2 4-4" />
  `,
})
export class LucideBookmarkCheck {}
