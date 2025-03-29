import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMegaphone],svg[lucide-megaphone]',
  host: {
    class: 'lucide lucide-megaphone',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m3 11 18-5v12L3 14v-3z" />
    <svg:path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
  `,
})
export class LucideMegaphone {}
