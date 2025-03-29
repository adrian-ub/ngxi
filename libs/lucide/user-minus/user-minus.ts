import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideUserMinus],svg[lucide-user-minus]',
  host: {
    class: 'lucide lucide-user-minus',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <svg:circle cx="9" cy="7" r="4" />
    <svg:line x1="22" x2="16" y1="11" y2="11" />
  `,
})
export class LucideUserMinus {}
