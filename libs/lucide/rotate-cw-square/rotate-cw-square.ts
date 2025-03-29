import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRotateCwSquare],svg[lucide-rotate-cw-square]',
  host: {
    class: 'lucide lucide-rotate-cw-square',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 5H6a2 2 0 0 0-2 2v3" />
    <svg:path d="m9 8 3-3-3-3" />
    <svg:path d="M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
  `,
})
export class LucideRotateCwSquare {}
