import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideUserRoundMinus],svg[lucide-user-round-minus]',
  host: {
    class: 'lucide lucide-user-round-minus',
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
    <svg:path d="M22 19h-6" />
  `,
})
export class LucideUserRoundMinus {}
