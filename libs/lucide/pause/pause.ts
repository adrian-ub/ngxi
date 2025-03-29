import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePause],svg[lucide-pause]',
  host: {
    class: 'lucide lucide-pause',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect x="14" y="4" width="4" height="16" rx="1" />
    <svg:rect x="6" y="4" width="4" height="16" rx="1" />
  `,
})
export class LucidePause {}
