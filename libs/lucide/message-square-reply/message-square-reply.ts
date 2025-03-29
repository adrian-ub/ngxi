import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMessageSquareReply],svg[lucide-message-square-reply]',
  host: {
    class: 'lucide lucide-message-square-reply',
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
    <svg:path d="m10 7-3 3 3 3" />
    <svg:path d="M17 13v-1a2 2 0 0 0-2-2H7" />
  `,
})
export class LucideMessageSquareReply {}
