import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMoveUpRight],svg[lucide-move-up-right]',
  host: {
    class: 'lucide lucide-move-up-right',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M13 5H19V11" />
    <svg:path d="M19 5L5 19" />
  `,
})
export class LucideMoveUpRight {}
