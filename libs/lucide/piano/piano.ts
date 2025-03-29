import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePiano],svg[lucide-piano]',
  host: {
    class: 'lucide lucide-piano',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8"
    />
    <svg:path d="M2 14h20" />
    <svg:path d="M6 14v4" />
    <svg:path d="M10 14v4" />
    <svg:path d="M14 14v4" />
    <svg:path d="M18 14v4" />
  `,
})
export class LucidePiano {}
