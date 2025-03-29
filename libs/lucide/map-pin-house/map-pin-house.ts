import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMapPinHouse],svg[lucide-map-pin-house]',
  host: {
    class: 'lucide lucide-map-pin-house',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z"
    />
    <svg:path
      d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2"
    />
    <svg:path d="M18 22v-3" />
    <svg:circle cx="10" cy="10" r="3" />
  `,
})
export class LucideMapPinHouse {}
