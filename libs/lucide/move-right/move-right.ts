import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMoveRight],svg[lucide-move-right]',
  host: {
    class: 'lucide lucide-move-right',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M18 8L22 12L18 16" />
    <svg:path d="M2 12H22" />
  `,
})
export class LucideMoveRight {}
