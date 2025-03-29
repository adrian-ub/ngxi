import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSeparatorVertical],svg[lucide-separator-vertical]',
  host: {
    class: 'lucide lucide-separator-vertical',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:line x1="12" x2="12" y1="3" y2="21" />
    <svg:polyline points="8 8 4 12 8 16" />
    <svg:polyline points="16 16 20 12 16 8" />
  `,
})
export class LucideSeparatorVertical {}
