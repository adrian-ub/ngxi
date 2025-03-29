import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArrowUpFromLine],svg[lucide-arrow-up-from-line]',
  host: {
    class: 'lucide lucide-arrow-up-from-line',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m18 9-6-6-6 6" />
    <svg:path d="M12 3v14" />
    <svg:path d="M5 21h14" />
  `,
})
export class LucideArrowUpFromLine {}
