import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMars],svg[lucide-mars]',
  host: {
    class: 'lucide lucide-mars',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M16 3h5v5" />
    <svg:path d="m21 3-6.75 6.75" />
    <svg:circle cx="10" cy="14" r="6" />
  `,
})
export class LucideMars {}
