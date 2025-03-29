import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLasso],svg[lucide-lasso]',
  host: {
    class: 'lucide lucide-lasso',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M7 22a5 5 0 0 1-2-4" />
    <svg:path
      d="M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1"
    />
    <svg:path d="M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
  `,
})
export class LucideLasso {}
