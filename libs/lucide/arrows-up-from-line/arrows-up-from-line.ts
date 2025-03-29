import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArrowsUpFromLine],svg[lucide-arrows-up-from-line]',
  host: {
    class: 'lucide lucide-arrows-up-from-line',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m4 6 3-3 3 3" />
    <svg:path d="M7 17V3" />
    <svg:path d="m14 6 3-3 3 3" />
    <svg:path d="M17 17V3" />
    <svg:path d="M4 21h16" />
  `,
})
export class LucideArrowsUpFromLine {}
