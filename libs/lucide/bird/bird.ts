import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBird],svg[lucide-bird]',
  host: {
    class: 'lucide lucide-bird',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M16 7h.01" />
    <svg:path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
    <svg:path d="m20 7 2 .5-2 .5" />
    <svg:path d="M10 18v3" />
    <svg:path d="M14 17.75V21" />
    <svg:path d="M7 18a6 6 0 0 0 3.84-10.61" />
  `,
})
export class LucideBird {}
