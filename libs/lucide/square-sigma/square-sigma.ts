import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSquareSigma],svg[lucide-square-sigma]',
  host: {
    class: 'lucide lucide-square-sigma',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" />
    <svg:path d="M16 8.9V7H8l4 5-4 5h8v-1.9" />
  `,
})
export class LucideSquareSigma {}
