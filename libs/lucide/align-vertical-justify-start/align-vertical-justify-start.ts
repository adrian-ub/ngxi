import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideAlignVerticalJustifyStart],svg[lucide-align-vertical-justify-start]',
  host: {
    class: 'lucide lucide-align-vertical-justify-start',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="14" height="6" x="5" y="16" rx="2" />
    <svg:rect width="10" height="6" x="7" y="6" rx="2" />
    <svg:path d="M2 2h20" />
  `,
})
export class LucideAlignVerticalJustifyStart {}
