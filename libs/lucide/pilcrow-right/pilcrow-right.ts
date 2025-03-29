import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePilcrowRight],svg[lucide-pilcrow-right]',
  host: {
    class: 'lucide lucide-pilcrow-right',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M10 3v11" />
    <svg:path d="M10 9H7a1 1 0 0 1 0-6h8" />
    <svg:path d="M14 3v11" />
    <svg:path d="m18 14 4 4H2" />
    <svg:path d="m22 18-4 4" />
  `,
})
export class LucidePilcrowRight {}
