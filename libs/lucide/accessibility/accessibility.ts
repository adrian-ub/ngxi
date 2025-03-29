import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAccessibility],svg[lucide-accessibility]',
  host: {
    class: 'lucide lucide-accessibility',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="16" cy="4" r="1" />
    <svg:path d="m18 19 1-7-6 1" />
    <svg:path d="m5 8 3-3 5.5 3-2.36 3.5" />
    <svg:path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
    <svg:path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
  `,
})
export class LucideAccessibility {}
