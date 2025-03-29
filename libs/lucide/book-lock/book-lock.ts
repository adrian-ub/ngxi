import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBookLock],svg[lucide-book-lock]',
  host: {
    class: 'lucide lucide-book-lock',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M18 6V4a2 2 0 1 0-4 0v2" />
    <svg:path d="M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
    <svg:path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10" />
    <svg:rect x="12" y="6" width="8" height="5" rx="1" />
  `,
})
export class LucideBookLock {}
