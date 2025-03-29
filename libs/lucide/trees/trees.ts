import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTrees],svg[lucide-trees]',
  host: {
    class: 'lucide lucide-trees',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"
    />
    <svg:path d="M7 16v6" />
    <svg:path d="M13 19v3" />
    <svg:path
      d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"
    />
  `,
})
export class LucideTrees {}
