import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArrowUpToLine],svg[lucide-arrow-up-to-line]',
  host: {
    class: 'lucide lucide-arrow-up-to-line',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M5 3h14" />
    <svg:path d="m18 13-6-6-6 6" />
    <svg:path d="M12 7v14" />
  `,
})
export class LucideArrowUpToLine {}
