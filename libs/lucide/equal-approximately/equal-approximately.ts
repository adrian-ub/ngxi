import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideEqualApproximately],svg[lucide-equal-approximately]',
  host: {
    class: 'lucide lucide-equal-approximately',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0" />
    <svg:path d="M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0" />
  `,
})
export class LucideEqualApproximately {}
