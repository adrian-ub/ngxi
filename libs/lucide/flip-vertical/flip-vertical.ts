import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFlipVertical],svg[lucide-flip-vertical]',
  host: {
    class: 'lucide lucide-flip-vertical',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" />
    <svg:path d="M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" />
    <svg:path d="M4 12H2" />
    <svg:path d="M10 12H8" />
    <svg:path d="M16 12h-2" />
    <svg:path d="M22 12h-2" />
  `,
})
export class LucideFlipVertical {}
