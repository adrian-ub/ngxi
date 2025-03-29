import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSnail],svg[lucide-snail]',
  host: {
    class: 'lucide lucide-snail',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0" />
    <svg:circle cx="10" cy="13" r="8" />
    <svg:path d="M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6" />
    <svg:path d="M18 3 19.1 5.2" />
    <svg:path d="M22 3 20.9 5.2" />
  `,
})
export class LucideSnail {}
