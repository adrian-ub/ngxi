import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideClock2],svg[lucide-clock-2]',
  host: {
    class: 'lucide lucide-clock-2',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="10" />
    <svg:polyline points="12 6 12 12 16 10" />
  `,
})
export class LucideClock2 {}
