import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCircleArrowDown],svg[lucide-circle-arrow-down]',
  host: {
    class: 'lucide lucide-circle-arrow-down',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="10" />
    <svg:path d="M12 8v8" />
    <svg:path d="m8 12 4 4 4-4" />
  `,
})
export class LucideCircleArrowDown {}
