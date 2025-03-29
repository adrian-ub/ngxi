import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCompass],svg[lucide-compass]',
  host: {
    class: 'lucide lucide-compass',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
    />
    <svg:circle cx="12" cy="12" r="10" />
  `,
})
export class LucideCompass {}
