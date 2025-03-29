import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArmchair],svg[lucide-armchair]',
  host: {
    class: 'lucide lucide-armchair',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" />
    <svg:path
      d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"
    />
    <svg:path d="M5 18v2" />
    <svg:path d="M19 18v2" />
  `,
})
export class LucideArmchair {}
