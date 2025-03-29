import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMessageSquareMore],svg[lucide-message-square-more]',
  host: {
    class: 'lucide lucide-message-square-more',
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
    <svg:path d="M8 10h.01" />
    <svg:path d="M12 10h.01" />
    <svg:path d="M16 10h.01" />
  `,
})
export class LucideMessageSquareMore {}
