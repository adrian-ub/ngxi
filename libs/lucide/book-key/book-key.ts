import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBookKey],svg[lucide-book-key]',
  host: {
    class: 'lucide lucide-book-key',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m19 3 1 1" />
    <svg:path d="m20 2-4.5 4.5" />
    <svg:path d="M20 8v13a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
    <svg:path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14" />
    <svg:circle cx="14" cy="8" r="2" />
  `,
})
export class LucideBookKey {}
