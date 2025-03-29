import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideOption],svg[lucide-option]',
  host: {
    class: 'lucide lucide-option',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M3 3h6l6 18h6" />
    <svg:path d="M14 3h7" />
  `,
})
export class LucideOption {}
