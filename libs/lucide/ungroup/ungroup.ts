import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideUngroup],svg[lucide-ungroup]',
  host: {
    class: 'lucide lucide-ungroup',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="8" height="6" x="5" y="4" rx="1" />
    <svg:rect width="8" height="6" x="11" y="14" rx="1" />
  `,
})
export class LucideUngroup {}
