import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMessageSquareCode],svg[lucide-message-square-code]',
  host: {
    class: 'lucide lucide-message-square-code',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M10 7.5 8 10l2 2.5" />
    <svg:path d="m14 7.5 2 2.5-2 2.5" />
    <svg:path
      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
    />
  `,
})
export class LucideMessageSquareCode {}
