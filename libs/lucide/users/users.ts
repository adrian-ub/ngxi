import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideUsers],svg[lucide-users]',
  host: {
    class: 'lucide lucide-users',
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
    <svg:path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <svg:path d="M16 3.13a4 4 0 0 1 0 7.75" />
  `,
})
export class LucideUsers {}
