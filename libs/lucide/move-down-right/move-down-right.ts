import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMoveDownRight],svg[lucide-move-down-right]',
  host: {
    class: 'lucide lucide-move-down-right',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M19 13V19H13" />
    <svg:path d="M5 5L19 19" />
  `,
})
export class LucideMoveDownRight {}
