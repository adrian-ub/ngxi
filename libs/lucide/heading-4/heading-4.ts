import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideHeading4],svg[lucide-heading-4]',
  host: {
    class: 'lucide lucide-heading-4',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 18V6" />
    <svg:path d="M17 10v3a1 1 0 0 0 1 1h3" />
    <svg:path d="M21 10v8" />
    <svg:path d="M4 12h8" />
    <svg:path d="M4 18V6" />
  `,
})
export class LucideHeading4 {}
