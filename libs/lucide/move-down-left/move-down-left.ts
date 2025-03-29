import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMoveDownLeft],svg[lucide-move-down-left]',
  host: {
    class: 'lucide lucide-move-down-left',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M11 19H5V13" />
    <svg:path d="M19 5L5 19" />
  `,
})
export class LucideMoveDownLeft {}
