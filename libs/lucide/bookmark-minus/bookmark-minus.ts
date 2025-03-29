import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBookmarkMinus],svg[lucide-bookmark-minus]',
  host: {
    class: 'lucide lucide-bookmark-minus',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    <svg:line x1="15" x2="9" y1="10" y2="10" />
  `,
})
export class LucideBookmarkMinus {}
