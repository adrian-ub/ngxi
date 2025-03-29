import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCopyleft],svg[lucide-copyleft]',
  host: {
    class: 'lucide lucide-copyleft',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="10" />
    <svg:path d="M9.17 14.83a4 4 0 1 0 0-5.66" />
  `,
})
export class LucideCopyleft {}
