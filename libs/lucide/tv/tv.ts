import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTv],svg[lucide-tv]',
  host: {
    class: 'lucide lucide-tv',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="20" height="15" x="2" y="7" rx="2" ry="2" />
    <svg:polyline points="17 2 12 7 7 2" />
  `,
})
export class LucideTv {}
