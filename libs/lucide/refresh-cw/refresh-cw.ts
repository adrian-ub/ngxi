import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRefreshCw],svg[lucide-refresh-cw]',
  host: {
    class: 'lucide lucide-refresh-cw',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
    <svg:path d="M21 3v5h-5" />
    <svg:path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
    <svg:path d="M8 16H3v5" />
  `,
})
export class LucideRefreshCw {}
