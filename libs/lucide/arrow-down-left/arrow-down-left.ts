import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArrowDownLeft],svg[lucide-arrow-down-left]',
  host: {
    class: 'lucide lucide-arrow-down-left',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M17 7 7 17" />
    <svg:path d="M17 17H7V7" />
  `,
})
export class LucideArrowDownLeft {}
