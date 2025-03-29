import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSpellCheck2],svg[lucide-spell-check-2]',
  host: {
    class: 'lucide lucide-spell-check-2',
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
    <svg:path
      d="M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1"
    />
  `,
})
export class LucideSpellCheck2 {}
