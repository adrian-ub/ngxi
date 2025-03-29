import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSaudiRiyal],svg[lucide-saudi-riyal]',
  host: {
    class: 'lucide lucide-saudi-riyal',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m20 19.5-5.5 1.2" />
    <svg:path d="M14.5 4v11.22a1 1 0 0 0 1.242.97L20 15.2" />
    <svg:path d="m2.978 19.351 5.549-1.363A2 2 0 0 0 10 16V2" />
    <svg:path d="M20 10 4 13.5" />
  `,
})
export class LucideSaudiRiyal {}
