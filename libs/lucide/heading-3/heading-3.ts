import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideHeading3],svg[lucide-heading-3]',
  host: {
    class: 'lucide lucide-heading-3',
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
    <svg:path d="M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2" />
    <svg:path d="M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2" />
  `,
})
export class LucideHeading3 {}
