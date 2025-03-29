import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArrowRightFromLine],svg[lucide-arrow-right-from-line]',
  host: {
    class: 'lucide lucide-arrow-right-from-line',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M3 5v14" />
    <svg:path d="M21 12H7" />
    <svg:path d="m15 18 6-6-6-6" />
  `,
})
export class LucideArrowRightFromLine {}
