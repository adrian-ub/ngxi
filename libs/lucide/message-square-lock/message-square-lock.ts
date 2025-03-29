import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMessageSquareLock],svg[lucide-message-square-lock]',
  host: {
    class: 'lucide lucide-message-square-lock',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M19 15v-2a2 2 0 1 0-4 0v2" />
    <svg:path d="M9 17H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3.5" />
    <svg:rect x="13" y="15" width="8" height="5" rx="1" />
  `,
})
export class LucideMessageSquareLock {}
