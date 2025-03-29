import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideHeading2],svg[lucide-heading-2]',
  host: {
    class: 'lucide lucide-heading-2',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M4 12h8" />
    <svg:path d="M4 18V6" />
    <svg:path d="M12 18V6" />
    <svg:path d="M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1" />
  `,
})
export class LucideHeading2 {}
