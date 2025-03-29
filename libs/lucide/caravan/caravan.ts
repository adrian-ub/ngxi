import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCaravan],svg[lucide-caravan]',
  host: {
    class: 'lucide lucide-caravan',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2" />
    <svg:path d="M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2" />
    <svg:path
      d="M22 17v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9"
    />
    <svg:circle cx="8" cy="19" r="2" />
  `,
})
export class LucideCaravan {}
