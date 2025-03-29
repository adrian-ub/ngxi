import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBlend],svg[lucide-blend]',
  host: {
    class: 'lucide lucide-blend',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="9" cy="9" r="7" />
    <svg:circle cx="15" cy="15" r="7" />
  `,
})
export class LucideBlend {}
