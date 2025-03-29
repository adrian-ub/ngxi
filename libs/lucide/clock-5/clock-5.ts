import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideClock5],svg[lucide-clock-5]',
  host: {
    class: 'lucide lucide-clock-5',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="10" />
    <svg:polyline points="12 6 12 12 14.5 16" />
  `,
})
export class LucideClock5 {}
