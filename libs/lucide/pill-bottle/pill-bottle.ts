import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePillBottle],svg[lucide-pill-bottle]',
  host: {
    class: 'lucide lucide-pill-bottle',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4" />
    <svg:path d="M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7" />
    <svg:rect width="16" height="5" x="4" y="2" rx="1" />
  `,
})
export class LucidePillBottle {}
