import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAArrowDown],svg[lucide-a-arrow-down]',
  host: {
    class: 'lucide lucide-a-arrow-down',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M3.5 13h6" />
    <svg:path d="m2 16 4.5-9 4.5 9" />
    <svg:path d="M18 7v9" />
    <svg:path d="m14 12 4 4 4-4" />
  `,
})
export class LucideAArrowDown {}
