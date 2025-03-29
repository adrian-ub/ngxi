import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideDropletOff],svg[lucide-droplet-off]',
  host: {
    class: 'lucide lucide-droplet-off',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M18.715 13.186C18.29 11.858 17.384 10.607 16 9.5c-2-1.6-3.5-4-4-6.5a10.7 10.7 0 0 1-.884 2.586"
    />
    <svg:path d="m2 2 20 20" />
    <svg:path
      d="M8.795 8.797A11 11 0 0 1 8 9.5C6 11.1 5 13 5 15a7 7 0 0 0 13.222 3.208"
    />
  `,
})
export class LucideDropletOff {}
