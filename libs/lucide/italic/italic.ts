import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideItalic],svg[lucide-italic]',
  host: {
    class: 'lucide lucide-italic',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:line x1="19" x2="10" y1="4" y2="4" />
    <svg:line x1="14" x2="5" y1="20" y2="20" />
    <svg:line x1="15" x2="9" y1="4" y2="20" />
  `,
})
export class LucideItalic {}
