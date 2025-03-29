import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePi],svg[lucide-pi]',
  host: {
    class: 'lucide lucide-pi',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:line x1="9" x2="9" y1="4" y2="20" />
    <svg:path d="M4 7c0-1.7 1.3-3 3-3h13" />
    <svg:path d="M18 20c-1.7 0-3-1.3-3-3V4" />
  `,
})
export class LucidePi {}
