import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMailbox],svg[lucide-mailbox]',
  host: {
    class: 'lucide lucide-mailbox',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"
    />
    <svg:polyline points="15,9 18,9 18,11" />
    <svg:path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2" />
    <svg:line x1="6" x2="7" y1="10" y2="10" />
  `,
})
export class LucideMailbox {}
