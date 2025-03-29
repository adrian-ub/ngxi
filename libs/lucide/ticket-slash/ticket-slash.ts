import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTicketSlash],svg[lucide-ticket-slash]',
  host: {
    class: 'lucide lucide-ticket-slash',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
    />
    <svg:path d="m9.5 14.5 5-5" />
  `,
})
export class LucideTicketSlash {}
