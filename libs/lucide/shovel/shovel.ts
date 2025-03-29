import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideShovel],svg[lucide-shovel]',
  host: {
    class: 'lucide lucide-shovel',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M2 22v-5l5-5 5 5-5 5z" />
    <svg:path d="M9.5 14.5 16 8" />
    <svg:path
      d="m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2"
    />
  `,
})
export class LucideShovel {}
