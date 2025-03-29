import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideUserSearch],svg[lucide-user-search]',
  host: {
    class: 'lucide lucide-user-search',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="10" cy="7" r="4" />
    <svg:path d="M10.3 15H7a4 4 0 0 0-4 4v2" />
    <svg:circle cx="17" cy="17" r="3" />
    <svg:path d="m21 21-1.9-1.9" />
  `,
})
export class LucideUserSearch {}
