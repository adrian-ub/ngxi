import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLinkedin],svg[lucide-linkedin]',
  host: {
    class: 'lucide lucide-linkedin',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
    />
    <svg:rect width="4" height="12" x="2" y="9" />
    <svg:circle cx="4" cy="4" r="2" />
  `,
})
export class LucideLinkedin {}
