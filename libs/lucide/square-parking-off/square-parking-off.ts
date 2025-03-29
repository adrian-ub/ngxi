import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSquareParkingOff],svg[lucide-square-parking-off]',
  host: {
    class: 'lucide lucide-square-parking-off',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41"
    />
    <svg:path d="M3 8.7V19a2 2 0 0 0 2 2h10.3" />
    <svg:path d="m2 2 20 20" />
    <svg:path d="M13 13a3 3 0 1 0 0-6H9v2" />
    <svg:path d="M9 17v-2.3" />
  `,
})
export class LucideSquareParkingOff {}
