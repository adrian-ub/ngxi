import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMegaphoneOff],svg[lucide-megaphone-off]',
  host: {
    class: 'lucide lucide-megaphone-off',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M9.26 9.26 3 11v3l14.14 3.14" />
    <svg:path d="M21 15.34V6l-7.31 2.03" />
    <svg:path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    <svg:line x1="2" x2="22" y1="2" y2="22" />
  `,
})
export class LucideMegaphoneOff {}
