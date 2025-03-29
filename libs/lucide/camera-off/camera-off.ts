import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCameraOff],svg[lucide-camera-off]',
  host: {
    class: 'lucide lucide-camera-off',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:line x1="2" x2="22" y1="2" y2="22" />
    <svg:path d="M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16" />
    <svg:path d="M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5" />
    <svg:path d="M14.121 15.121A3 3 0 1 1 9.88 10.88" />
  `,
})
export class LucideCameraOff {}
