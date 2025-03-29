import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCircleCheck],svg[lucide-circle-check]',
  host: {
    class: 'lucide lucide-circle-check',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="10" />
    <svg:path d="m9 12 2 2 4-4" />
  `,
})
export class LucideCircleCheck {}
