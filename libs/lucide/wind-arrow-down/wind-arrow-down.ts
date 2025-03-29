import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideWindArrowDown],svg[lucide-wind-arrow-down]',
  host: {
    class: 'lucide lucide-wind-arrow-down',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M10 2v8" />
    <svg:path d="M12.8 21.6A2 2 0 1 0 14 18H2" />
    <svg:path d="M17.5 10a2.5 2.5 0 1 1 2 4H2" />
    <svg:path d="m6 6 4 4 4-4" />
  `,
})
export class LucideWindArrowDown {}
