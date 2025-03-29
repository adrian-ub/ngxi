import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSeparatorHorizontal],svg[lucide-separator-horizontal]',
  host: {
    class: 'lucide lucide-separator-horizontal',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:line x1="3" x2="21" y1="12" y2="12" />
    <svg:polyline points="8 8 12 4 16 8" />
    <svg:polyline points="16 16 12 20 8 16" />
  `,
})
export class LucideSeparatorHorizontal {}
