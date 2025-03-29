import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideVideoOff],svg[lucide-video-off]',
  host: {
    class: 'lucide lucide-video-off',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196"
    />
    <svg:path d="M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" />
    <svg:path d="m2 2 20 20" />
  `,
})
export class LucideVideoOff {}
