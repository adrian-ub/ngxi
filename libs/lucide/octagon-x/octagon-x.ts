import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideOctagonX],svg[lucide-octagon-x]',
  host: {
    class: 'lucide lucide-octagon-x',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m15 9-6 6" />
    <svg:path
      d="M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"
    />
    <svg:path d="m9 9 6 6" />
  `,
})
export class LucideOctagonX {}
