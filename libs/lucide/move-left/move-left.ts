import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMoveLeft],svg[lucide-move-left]',
  host: {
    class: 'lucide lucide-move-left',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M6 8L2 12L6 16" />
    <svg:path d="M2 12H22" />
  `,
})
export class LucideMoveLeft {}
