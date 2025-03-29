import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideDiameter],svg[lucide-diameter]',
  host: {
    class: 'lucide lucide-diameter',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="19" cy="19" r="2" />
    <svg:circle cx="5" cy="5" r="2" />
    <svg:path d="M6.48 3.66a10 10 0 0 1 13.86 13.86" />
    <svg:path d="m6.41 6.41 11.18 11.18" />
    <svg:path d="M3.66 6.48a10 10 0 0 0 13.86 13.86" />
  `,
})
export class LucideDiameter {}
