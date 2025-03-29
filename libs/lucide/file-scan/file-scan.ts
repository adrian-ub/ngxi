import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFileScan],svg[lucide-file-scan]',
  host: {
    class: 'lucide lucide-file-scan',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4" />
    <svg:path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <svg:path d="M16 14a2 2 0 0 0-2 2" />
    <svg:path d="M20 14a2 2 0 0 1 2 2" />
    <svg:path d="M20 22a2 2 0 0 0 2-2" />
    <svg:path d="M16 22a2 2 0 0 1-2-2" />
  `,
})
export class LucideFileScan {}
