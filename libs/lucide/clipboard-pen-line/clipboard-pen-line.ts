import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideClipboardPenLine],svg[lucide-clipboard-pen-line]',
  host: {
    class: 'lucide lucide-clipboard-pen-line',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="8" height="4" x="8" y="2" rx="1" />
    <svg:path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5" />
    <svg:path d="M16 4h2a2 2 0 0 1 1.73 1" />
    <svg:path d="M8 18h1" />
    <svg:path
      d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
    />
  `,
})
export class LucideClipboardPenLine {}
