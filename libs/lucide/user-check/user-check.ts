import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideUserCheck],svg[lucide-user-check]',
  host: {
    class: 'lucide lucide-user-check',
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
    <svg:polyline points="16 11 18 13 22 9" />
  `,
})
export class LucideUserCheck {}
