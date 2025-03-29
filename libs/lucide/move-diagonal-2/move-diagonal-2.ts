import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMoveDiagonal2],svg[lucide-move-diagonal-2]',
  host: {
    class: 'lucide lucide-move-diagonal-2',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M19 13v6h-6" />
    <svg:path d="M5 11V5h6" />
    <svg:path d="m5 5 14 14" />
  `,
})
export class LucideMoveDiagonal2 {}
