import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePinOff],svg[lucide-pin-off]',
  host: {
    class: 'lucide lucide-pin-off',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 17v5" />
    <svg:path d="M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89" />
    <svg:path d="m2 2 20 20" />
    <svg:path
      d="M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11"
    />
  `,
})
export class LucidePinOff {}
