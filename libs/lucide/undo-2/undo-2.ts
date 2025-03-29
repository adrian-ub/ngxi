import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideUndo2],svg[lucide-undo-2]',
  host: {
    class: 'lucide lucide-undo-2',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M9 14 4 9l5-5" />
    <svg:path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" />
  `,
})
export class LucideUndo2 {}
