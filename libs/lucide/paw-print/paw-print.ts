import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePawPrint],svg[lucide-paw-print]',
  host: {
    class: 'lucide lucide-paw-print',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="11" cy="4" r="2" />
    <svg:circle cx="18" cy="8" r="2" />
    <svg:circle cx="20" cy="16" r="2" />
    <svg:path
      d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"
    />
  `,
})
export class LucidePawPrint {}
