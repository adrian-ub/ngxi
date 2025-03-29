import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAirplay],svg[lucide-airplay]',
  host: {
    class: 'lucide lucide-airplay',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"
    />
    <svg:path d="m12 15 5 6H7Z" />
  `,
})
export class LucideAirplay {}
