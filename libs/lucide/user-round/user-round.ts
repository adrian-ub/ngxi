import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideUserRound],svg[lucide-user-round]',
  host: {
    class: 'lucide lucide-user-round',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="8" r="5" />
    <svg:path d="M20 21a8 8 0 0 0-16 0" />
  `,
})
export class LucideUserRound {}
