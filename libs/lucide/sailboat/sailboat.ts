import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSailboat],svg[lucide-sailboat]',
  host: {
    class: 'lucide lucide-sailboat',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z" />
    <svg:path d="M21 14 10 2 3 14h18Z" />
    <svg:path d="M10 2v16" />
  `,
})
export class LucideSailboat {}
