import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideScanSearch],svg[lucide-scan-search]',
  host: {
    class: 'lucide lucide-scan-search',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M3 7V5a2 2 0 0 1 2-2h2" />
    <svg:path d="M17 3h2a2 2 0 0 1 2 2v2" />
    <svg:path d="M21 17v2a2 2 0 0 1-2 2h-2" />
    <svg:path d="M7 21H5a2 2 0 0 1-2-2v-2" />
    <svg:circle cx="12" cy="12" r="3" />
    <svg:path d="m16 16-1.9-1.9" />
  `,
})
export class LucideScanSearch {}
