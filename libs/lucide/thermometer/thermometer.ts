import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideThermometer],svg[lucide-thermometer]',
  host: {
    class: 'lucide lucide-thermometer',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: ` <svg:path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" /> `,
})
export class LucideThermometer {}
