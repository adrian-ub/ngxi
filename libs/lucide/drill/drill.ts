import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideDrill],svg[lucide-drill]',
  host: {
    class: 'lucide lucide-drill',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1z"
    />
    <svg:path
      d="M13 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8"
    />
    <svg:path d="M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3" />
    <svg:path d="M18 6h4" />
    <svg:path d="m5 10-2 8" />
    <svg:path d="m7 18 2-8" />
  `,
})
export class LucideDrill {}
