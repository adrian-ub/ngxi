import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePhilippinePeso],svg[lucide-philippine-peso]',
  host: {
    class: 'lucide lucide-philippine-peso',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M20 11H4" />
    <svg:path d="M20 7H4" />
    <svg:path d="M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7" />
  `,
})
export class LucidePhilippinePeso {}
