import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRollerCoaster],svg[lucide-roller-coaster]',
  host: {
    class: 'lucide lucide-roller-coaster',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M6 19V5" />
    <svg:path d="M10 19V6.8" />
    <svg:path d="M14 19v-7.8" />
    <svg:path d="M18 5v4" />
    <svg:path d="M18 19v-6" />
    <svg:path d="M22 19V9" />
    <svg:path
      d="M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65"
    />
  `,
})
export class LucideRollerCoaster {}
