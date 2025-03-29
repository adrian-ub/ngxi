import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAlignEndVertical],svg[lucide-align-end-vertical]',
  host: {
    class: 'lucide lucide-align-end-vertical',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="16" height="6" x="2" y="4" rx="2" />
    <svg:rect width="9" height="6" x="9" y="14" rx="2" />
    <svg:path d="M22 22V2" />
  `,
})
export class LucideAlignEndVertical {}
