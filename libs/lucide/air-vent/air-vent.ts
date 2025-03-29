import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAirVent],svg[lucide-air-vent]',
  host: {
    class: 'lucide lucide-air-vent',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
    />
    <svg:path d="M6 8h12" />
    <svg:path
      d="M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12"
    />
    <svg:path d="M6.6 15.6A2 2 0 1 0 10 17v-5" />
  `,
})
export class LucideAirVent {}
