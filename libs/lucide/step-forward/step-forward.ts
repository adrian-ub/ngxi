import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideStepForward],svg[lucide-step-forward]',
  host: {
    class: 'lucide lucide-step-forward',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:line x1="6" x2="6" y1="4" y2="20" />
    <svg:polygon points="10,4 20,12 10,20" />
  `,
})
export class LucideStepForward {}
