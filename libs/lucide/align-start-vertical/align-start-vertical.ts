import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAlignStartVertical],svg[lucide-align-start-vertical]',
  host: {
    class: 'lucide lucide-align-start-vertical',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="9" height="6" x="6" y="14" rx="2" />
    <svg:rect width="16" height="6" x="6" y="4" rx="2" />
    <svg:path d="M2 2v20" />
  `,
})
export class LucideAlignStartVertical {}
