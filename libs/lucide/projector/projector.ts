import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideProjector],svg[lucide-projector]',
  host: {
    class: 'lucide lucide-projector',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M5 7 3 5" />
    <svg:path d="M9 6V3" />
    <svg:path d="m13 7 2-2" />
    <svg:circle cx="9" cy="13" r="3" />
    <svg:path
      d="M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17"
    />
    <svg:path d="M16 16h2" />
  `,
})
export class LucideProjector {}
