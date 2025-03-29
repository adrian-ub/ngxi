import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMoveDiagonal],svg[lucide-move-diagonal]',
  host: {
    class: 'lucide lucide-move-diagonal',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M11 19H5v-6" />
    <svg:path d="M13 5h6v6" />
    <svg:path d="M19 5 5 19" />
  `,
})
export class LucideMoveDiagonal {}
