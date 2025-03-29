import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCircleParkingOff],svg[lucide-circle-parking-off]',
  host: {
    class: 'lucide lucide-circle-parking-off',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="10" />
    <svg:path d="m5 5 14 14" />
    <svg:path d="M13 13a3 3 0 1 0 0-6H9v2" />
    <svg:path d="M9 17v-2.34" />
  `,
})
export class LucideCircleParkingOff {}
