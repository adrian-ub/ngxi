import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSpellCheck],svg[lucide-spell-check]',
  host: {
    class: 'lucide lucide-spell-check',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m6 16 6-12 6 12" />
    <svg:path d="M8 12h8" />
    <svg:path d="m16 20 2 2 4-4" />
  `,
})
export class LucideSpellCheck {}
