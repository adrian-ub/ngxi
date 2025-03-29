import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideVegan],svg[lucide-vegan]',
  host: {
    class: 'lucide lucide-vegan',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M16 8q6 0 6-6-6 0-6 6" />
    <svg:path d="M17.41 3.59a10 10 0 1 0 3 3" />
    <svg:path d="M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14" />
  `,
})
export class LucideVegan {}
