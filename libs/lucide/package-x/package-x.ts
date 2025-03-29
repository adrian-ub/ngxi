import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePackageX],svg[lucide-package-x]',
  host: {
    class: 'lucide lucide-package-x',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
    />
    <svg:path d="m7.5 4.27 9 5.15" />
    <svg:polyline points="3.29 7 12 12 20.71 7" />
    <svg:line x1="12" x2="12" y1="22" y2="12" />
    <svg:path d="m17 13 5 5m-5 0 5-5" />
  `,
})
export class LucidePackageX {}
