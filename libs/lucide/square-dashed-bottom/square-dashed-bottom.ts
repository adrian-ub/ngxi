import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSquareDashedBottom],svg[lucide-square-dashed-bottom]',
  host: {
    class: 'lucide lucide-square-dashed-bottom',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"
    />
    <svg:path d="M9 21h1" />
    <svg:path d="M14 21h1" />
  `,
})
export class LucideSquareDashedBottom {}
