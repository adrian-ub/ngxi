import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRefreshCcw],svg[lucide-refresh-ccw]',
  host: {
    class: 'lucide lucide-refresh-ccw',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <svg:path d="M3 3v5h5" />
    <svg:path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
    <svg:path d="M16 16h5v5" />
  `,
})
export class LucideRefreshCcw {}
