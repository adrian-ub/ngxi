import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArrowLeft],svg[lucide-arrow-left]',
  host: {
    class: 'lucide lucide-arrow-left',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m12 19-7-7 7-7" />
    <svg:path d="M19 12H5" />
  `,
})
export class LucideArrowLeft {}
