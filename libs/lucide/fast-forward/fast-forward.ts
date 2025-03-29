import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFastForward],svg[lucide-fast-forward]',
  host: {
    class: 'lucide lucide-fast-forward',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:polygon points="13 19 22 12 13 5 13 19" />
    <svg:polygon points="2 19 11 12 2 5 2 19" />
  `,
})
export class LucideFastForward {}
