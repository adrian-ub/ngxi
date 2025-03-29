import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArrowDown],svg[lucide-arrow-down]',
  host: {
    class: 'lucide lucide-arrow-down',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 5v14" />
    <svg:path d="m19 12-7 7-7-7" />
  `,
})
export class LucideArrowDown {}
