import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCigarette],svg[lucide-cigarette]',
  host: {
    class: 'lucide lucide-cigarette',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14" />
    <svg:path d="M18 8c0-2.5-2-2.5-2-5" />
    <svg:path d="M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
    <svg:path d="M22 8c0-2.5-2-2.5-2-5" />
    <svg:path d="M7 12v4" />
  `,
})
export class LucideCigarette {}
