import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMoveHorizontal],svg[lucide-move-horizontal]',
  host: {
    class: 'lucide lucide-move-horizontal',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m18 8 4 4-4 4" />
    <svg:path d="M2 12h20" />
    <svg:path d="m6 8-4 4 4 4" />
  `,
})
export class LucideMoveHorizontal {}
