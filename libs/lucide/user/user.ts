import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideUser],svg[lucide-user]',
  host: {
    class: 'lucide lucide-user',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <svg:circle cx="12" cy="7" r="4" />
  `,
})
export class LucideUser {}
