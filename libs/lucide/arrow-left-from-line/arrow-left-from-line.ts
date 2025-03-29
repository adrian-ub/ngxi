import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArrowLeftFromLine],svg[lucide-arrow-left-from-line]',
  host: {
    class: 'lucide lucide-arrow-left-from-line',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m9 6-6 6 6 6" />
    <svg:path d="M3 12h14" />
    <svg:path d="M21 19V5" />
  `,
})
export class LucideArrowLeftFromLine {}
