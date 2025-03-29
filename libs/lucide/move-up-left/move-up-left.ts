import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMoveUpLeft],svg[lucide-move-up-left]',
  host: {
    class: 'lucide lucide-move-up-left',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M5 11V5H11" />
    <svg:path d="M5 5L19 19" />
  `,
})
export class LucideMoveUpLeft {}
