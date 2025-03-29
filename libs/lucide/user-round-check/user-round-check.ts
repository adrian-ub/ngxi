import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideUserRoundCheck],svg[lucide-user-round-check]',
  host: {
    class: 'lucide lucide-user-round-check',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M2 21a8 8 0 0 1 13.292-6" />
    <svg:circle cx="10" cy="8" r="5" />
    <svg:path d="m16 19 2 2 4-4" />
  `,
})
export class LucideUserRoundCheck {}
