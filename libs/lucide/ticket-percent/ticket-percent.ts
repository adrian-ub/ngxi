import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTicketPercent],svg[lucide-ticket-percent]',
  host: {
    class: 'lucide lucide-ticket-percent',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
    />
    <svg:path d="M9 9h.01" />
    <svg:path d="m15 9-6 6" />
    <svg:path d="M15 15h.01" />
  `,
})
export class LucideTicketPercent {}
