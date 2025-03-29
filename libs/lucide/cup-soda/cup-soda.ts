import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCupSoda],svg[lucide-cup-soda]',
  host: {
    class: 'lucide lucide-cup-soda',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8" />
    <svg:path d="M5 8h14" />
    <svg:path d="M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0" />
    <svg:path d="m12 8 1-6h2" />
  `,
})
export class LucideCupSoda {}
