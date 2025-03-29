import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideWatch],svg[lucide-watch]',
  host: {
    class: 'lucide lucide-watch',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="6" />
    <svg:polyline points="12 10 12 12 13 13" />
    <svg:path
      d="m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05"
    />
    <svg:path
      d="m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"
    />
  `,
})
export class LucideWatch {}
