import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePaintbrushVertical],svg[lucide-paintbrush-vertical]',
  host: {
    class: 'lucide lucide-paintbrush-vertical',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M10 2v2" />
    <svg:path d="M14 2v4" />
    <svg:path d="M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z" />
    <svg:path
      d="M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1"
    />
  `,
})
export class LucidePaintbrushVertical {}
