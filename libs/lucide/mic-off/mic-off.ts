import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMicOff],svg[lucide-mic-off]',
  host: {
    class: 'lucide lucide-mic-off',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:line x1="2" x2="22" y1="2" y2="22" />
    <svg:path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2" />
    <svg:path d="M5 10v2a7 7 0 0 0 12 5" />
    <svg:path d="M15 9.34V5a3 3 0 0 0-5.68-1.33" />
    <svg:path d="M9 9v3a3 3 0 0 0 5.12 2.12" />
    <svg:line x1="12" x2="12" y1="19" y2="22" />
  `,
})
export class LucideMicOff {}
