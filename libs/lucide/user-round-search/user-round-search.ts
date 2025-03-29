import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideUserRoundSearch],svg[lucide-user-round-search]',
  host: {
    class: 'lucide lucide-user-round-search',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="10" cy="8" r="5" />
    <svg:path d="M2 21a8 8 0 0 1 10.434-7.62" />
    <svg:circle cx="18" cy="18" r="3" />
    <svg:path d="m22 22-1.9-1.9" />
  `,
})
export class LucideUserRoundSearch {}
