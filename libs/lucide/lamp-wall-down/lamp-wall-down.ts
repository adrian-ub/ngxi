import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLampWallDown],svg[lucide-lamp-wall-down]',
  host: {
    class: 'lucide lucide-lamp-wall-down',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M11 13h6l3 7H8l3-7Z" />
    <svg:path d="M14 13V8a2 2 0 0 0-2-2H8" />
    <svg:path d="M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z" />
  `,
})
export class LucideLampWallDown {}
