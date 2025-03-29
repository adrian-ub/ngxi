import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePocket],svg[lucide-pocket]',
  host: {
    class: 'lucide lucide-pocket',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"
    />
    <svg:polyline points="8 10 12 14 16 10" />
  `,
})
export class LucidePocket {}
