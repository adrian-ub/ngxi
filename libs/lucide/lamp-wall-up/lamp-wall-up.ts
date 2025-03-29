import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLampWallUp],svg[lucide-lamp-wall-up]',
  host: {
    class: 'lucide lucide-lamp-wall-up',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M11 4h6l3 7H8l3-7Z" />
    <svg:path d="M14 11v5a2 2 0 0 1-2 2H8" />
    <svg:path d="M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z" />
  `,
})
export class LucideLampWallUp {}
