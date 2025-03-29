import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideServerCrash],svg[lucide-server-crash]',
  host: {
    class: 'lucide lucide-server-crash',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"
    />
    <svg:path
      d="M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2"
    />
    <svg:path d="M6 6h.01" />
    <svg:path d="M6 18h.01" />
    <svg:path d="m13 6-4 6h6l-4 6" />
  `,
})
export class LucideServerCrash {}
