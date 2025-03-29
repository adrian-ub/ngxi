import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMaximize],svg[lucide-maximize]',
  host: {
    class: 'lucide lucide-maximize',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M8 3H5a2 2 0 0 0-2 2v3" />
    <svg:path d="M21 8V5a2 2 0 0 0-2-2h-3" />
    <svg:path d="M3 16v3a2 2 0 0 0 2 2h3" />
    <svg:path d="M16 21h3a2 2 0 0 0 2-2v-3" />
  `,
})
export class LucideMaximize {}
