import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideConciergeBell],svg[lucide-concierge-bell]',
  host: {
    class: 'lucide lucide-concierge-bell',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z"
    />
    <svg:path d="M20 16a8 8 0 1 0-16 0" />
    <svg:path d="M12 4v4" />
    <svg:path d="M10 4h4" />
  `,
})
export class LucideConciergeBell {}
