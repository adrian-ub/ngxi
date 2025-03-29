import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFlagOff],svg[lucide-flag-off]',
  host: {
    class: 'lucide lucide-flag-off',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M8 2c3 0 5 2 8 2s4-1 4-1v11" />
    <svg:path d="M4 22V4" />
    <svg:path d="M4 15s1-1 4-1 5 2 8 2" />
    <svg:line x1="2" x2="22" y1="2" y2="22" />
  `,
})
export class LucideFlagOff {}
