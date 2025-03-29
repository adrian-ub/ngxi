import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArrowDownFromLine],svg[lucide-arrow-down-from-line]',
  host: {
    class: 'lucide lucide-arrow-down-from-line',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M19 3H5" />
    <svg:path d="M12 21V7" />
    <svg:path d="m6 15 6 6 6-6" />
  `,
})
export class LucideArrowDownFromLine {}
