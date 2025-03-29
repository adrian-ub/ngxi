import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAlignLeft],svg[lucide-align-left]',
  host: {
    class: 'lucide lucide-align-left',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M15 12H3" />
    <svg:path d="M17 18H3" />
    <svg:path d="M21 6H3" />
  `,
})
export class LucideAlignLeft {}
