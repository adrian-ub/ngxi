import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSkull],svg[lucide-skull]',
  host: {
    class: 'lucide lucide-skull',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m12.5 17-.5-1-.5 1h1z" />
    <svg:path
      d="M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z"
    />
    <svg:circle cx="15" cy="12" r="1" />
    <svg:circle cx="9" cy="12" r="1" />
  `,
})
export class LucideSkull {}
