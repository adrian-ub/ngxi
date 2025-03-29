import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideAlignCenterHorizontal],svg[lucide-align-center-horizontal]',
  host: {
    class: 'lucide lucide-align-center-horizontal',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M2 12h20" />
    <svg:path d="M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4" />
    <svg:path d="M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4" />
    <svg:path d="M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1" />
    <svg:path d="M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1" />
  `,
})
export class LucideAlignCenterHorizontal {}
