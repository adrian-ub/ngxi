import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideUndo],svg[lucide-undo]',
  host: {
    class: 'lucide lucide-undo',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M3 7v6h6" />
    <svg:path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />
  `,
})
export class LucideUndo {}
