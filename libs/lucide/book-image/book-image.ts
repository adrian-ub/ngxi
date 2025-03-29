import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBookImage],svg[lucide-book-image]',
  host: {
    class: 'lucide lucide-book-image',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17" />
    <svg:path
      d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
    />
    <svg:circle cx="10" cy="8" r="2" />
  `,
})
export class LucideBookImage {}
