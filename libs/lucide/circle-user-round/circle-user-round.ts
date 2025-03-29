import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCircleUserRound],svg[lucide-circle-user-round]',
  host: {
    class: 'lucide lucide-circle-user-round',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M18 20a6 6 0 0 0-12 0" />
    <svg:circle cx="12" cy="10" r="4" />
    <svg:circle cx="12" cy="12" r="10" />
  `,
})
export class LucideCircleUserRound {}
