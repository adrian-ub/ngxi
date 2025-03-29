import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideHighlighter],svg[lucide-highlighter]',
  host: {
    class: 'lucide lucide-highlighter',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m9 11-6 6v3h9l3-3" />
    <svg:path
      d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"
    />
  `,
})
export class LucideHighlighter {}
