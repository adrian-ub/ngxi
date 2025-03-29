import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMessageSquareQuote],svg[lucide-message-square-quote]',
  host: {
    class: 'lucide lucide-message-square-quote',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
    />
    <svg:path d="M8 12a2 2 0 0 0 2-2V8H8" />
    <svg:path d="M14 12a2 2 0 0 0 2-2V8h-2" />
  `,
})
export class LucideMessageSquareQuote {}
