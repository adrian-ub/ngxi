import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideView],svg[lucide-view]',
  host: {
    class: 'lucide lucide-view',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
    <svg:path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
    <svg:circle cx="12" cy="12" r="1" />
    <svg:path
      d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"
    />
  `,
})
export class LucideView {}
