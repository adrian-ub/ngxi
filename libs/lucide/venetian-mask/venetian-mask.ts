import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideVenetianMask],svg[lucide-venetian-mask]',
  host: {
    class: 'lucide lucide-venetian-mask',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M18 11c-1.5 0-2.5.5-3 2" />
    <svg:path
      d="M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z"
    />
    <svg:path d="M6 11c1.5 0 2.5.5 3 2" />
  `,
})
export class LucideVenetianMask {}
