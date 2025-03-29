import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePresentation],svg[lucide-presentation]',
  host: {
    class: 'lucide lucide-presentation',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M2 3h20" />
    <svg:path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
    <svg:path d="m7 21 5-5 5 5" />
  `,
})
export class LucidePresentation {}
