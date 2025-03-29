import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideEthernetPort],svg[lucide-ethernet-port]',
  host: {
    class: 'lucide lucide-ethernet-port',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="m15 20 3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3z"
    />
    <svg:path d="M6 8v1" />
    <svg:path d="M10 8v1" />
    <svg:path d="M14 8v1" />
    <svg:path d="M18 8v1" />
  `,
})
export class LucideEthernetPort {}
