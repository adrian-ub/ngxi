import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideStepBack],svg[lucide-step-back]',
  host: {
    class: 'lucide lucide-step-back',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:line x1="18" x2="18" y1="20" y2="4" />
    <svg:polygon points="14,20 4,12 14,4" />
  `,
})
export class LucideStepBack {}
