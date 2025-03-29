import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAtSign],svg[lucide-at-sign]',
  host: {
    class: 'lucide lucide-at-sign',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="4" />
    <svg:path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
  `,
})
export class LucideAtSign {}
