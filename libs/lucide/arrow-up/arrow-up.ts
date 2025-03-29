import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArrowUp],svg[lucide-arrow-up]',
  host: {
    class: 'lucide lucide-arrow-up',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m5 12 7-7 7 7" />
    <svg:path d="M12 19V5" />
  `,
})
export class LucideArrowUp {}
