import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRepeat],svg[lucide-repeat]',
  host: {
    class: 'lucide lucide-repeat',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m17 2 4 4-4 4" />
    <svg:path d="M3 11v-1a4 4 0 0 1 4-4h14" />
    <svg:path d="m7 22-4-4 4-4" />
    <svg:path d="M21 13v1a4 4 0 0 1-4 4H3" />
  `,
})
export class LucideRepeat {}
