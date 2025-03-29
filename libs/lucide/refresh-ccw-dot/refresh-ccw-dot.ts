import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRefreshCcwDot],svg[lucide-refresh-ccw-dot]',
  host: {
    class: 'lucide lucide-refresh-ccw-dot',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M3 2v6h6" />
    <svg:path d="M21 12A9 9 0 0 0 6 5.3L3 8" />
    <svg:path d="M21 22v-6h-6" />
    <svg:path d="M3 12a9 9 0 0 0 15 6.7l3-2.7" />
    <svg:circle cx="12" cy="12" r="1" />
  `,
})
export class LucideRefreshCcwDot {}
