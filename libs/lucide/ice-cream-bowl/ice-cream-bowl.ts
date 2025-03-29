import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideIceCreamBowl],svg[lucide-ice-cream-bowl]',
  host: {
    class: 'lucide lucide-ice-cream-bowl',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0"
    />
    <svg:path d="M12.14 11a3.5 3.5 0 1 1 6.71 0" />
    <svg:path d="M15.5 6.5a3.5 3.5 0 1 0-7 0" />
  `,
})
export class LucideIceCreamBowl {}
