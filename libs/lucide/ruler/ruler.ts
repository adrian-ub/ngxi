import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRuler],svg[lucide-ruler]',
  host: {
    class: 'lucide lucide-ruler',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"
    />
    <svg:path d="m14.5 12.5 2-2" />
    <svg:path d="m11.5 9.5 2-2" />
    <svg:path d="m8.5 6.5 2-2" />
    <svg:path d="m17.5 15.5 2-2" />
  `,
})
export class LucideRuler {}
