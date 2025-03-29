import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideAlignVerticalJustifyCenter],svg[lucide-align-vertical-justify-center]',
  host: {
    class: 'lucide lucide-align-vertical-justify-center',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="14" height="6" x="5" y="16" rx="2" />
    <svg:rect width="10" height="6" x="7" y="2" rx="2" />
    <svg:path d="M2 12h20" />
  `,
})
export class LucideAlignVerticalJustifyCenter {}
