import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideClapperboard],svg[lucide-clapperboard]',
  host: {
    class: 'lucide lucide-clapperboard',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"
    />
    <svg:path d="m6.2 5.3 3.1 3.9" />
    <svg:path d="m12.4 3.4 3.1 4" />
    <svg:path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
  `,
})
export class LucideClapperboard {}
