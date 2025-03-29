import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAppWindow],svg[lucide-app-window]',
  host: {
    class: 'lucide lucide-app-window',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect x="2" y="4" width="20" height="16" rx="2" />
    <svg:path d="M10 4v4" />
    <svg:path d="M2 8h20" />
    <svg:path d="M6 4v4" />
  `,
})
export class LucideAppWindow {}
