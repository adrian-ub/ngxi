import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMessageSquareShare],svg[lucide-message-square-share]',
  host: {
    class: 'lucide lucide-message-square-share',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7" />
    <svg:path d="M16 3h5v5" />
    <svg:path d="m16 8 5-5" />
  `,
})
export class LucideMessageSquareShare {}
