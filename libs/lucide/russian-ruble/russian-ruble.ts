import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRussianRuble],svg[lucide-russian-ruble]',
  host: {
    class: 'lucide lucide-russian-ruble',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M6 11h8a4 4 0 0 0 0-8H9v18" />
    <svg:path d="M6 15h8" />
  `,
})
export class LucideRussianRuble {}
