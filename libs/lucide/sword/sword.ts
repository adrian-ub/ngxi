import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSword],svg[lucide-sword]',
  host: {
    class: 'lucide lucide-sword',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
    <svg:line x1="13" x2="19" y1="19" y2="13" />
    <svg:line x1="16" x2="20" y1="16" y2="20" />
    <svg:line x1="19" x2="21" y1="21" y2="19" />
  `,
})
export class LucideSword {}
