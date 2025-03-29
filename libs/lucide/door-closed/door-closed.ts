import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideDoorClosed],svg[lucide-door-closed]',
  host: {
    class: 'lucide lucide-door-closed',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
    <svg:path d="M2 20h20" />
    <svg:path d="M14 12v.01" />
  `,
})
export class LucideDoorClosed {}
