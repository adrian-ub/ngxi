import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideHeading6],svg[lucide-heading-6]',
  host: {
    class: 'lucide lucide-heading-6',
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
    <svg:circle cx="19" cy="16" r="2" />
    <svg:path d="M20 10c-2 2-3 3.5-3 6" />
  `,
})
export class LucideHeading6 {}
