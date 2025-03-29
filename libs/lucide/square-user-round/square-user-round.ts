import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSquareUserRound],svg[lucide-square-user-round]',
  host: {
    class: 'lucide lucide-square-user-round',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M18 21a6 6 0 0 0-12 0" />
    <svg:circle cx="12" cy="11" r="4" />
    <svg:rect width="18" height="18" x="3" y="3" rx="2" />
  `,
})
export class LucideSquareUserRound {}
