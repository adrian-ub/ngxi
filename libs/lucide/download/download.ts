import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideDownload],svg[lucide-download]',
  host: {
    class: 'lucide lucide-download',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <svg:polyline points="7 10 12 15 17 10" />
    <svg:line x1="12" x2="12" y1="15" y2="3" />
  `,
})
export class LucideDownload {}
