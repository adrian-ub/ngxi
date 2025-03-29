import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMove3d],svg[lucide-move-3d]',
  host: {
    class: 'lucide lucide-move-3d',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M5 3v16h16" />
    <svg:path d="m5 19 6-6" />
    <svg:path d="m2 6 3-3 3 3" />
    <svg:path d="m18 16 3 3-3 3" />
  `,
})
export class LucideMove3d {}
