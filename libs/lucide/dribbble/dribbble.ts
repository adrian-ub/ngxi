import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideDribbble],svg[lucide-dribbble]',
  host: {
    class: 'lucide lucide-dribbble',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="10" />
    <svg:path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
    <svg:path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
    <svg:path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
  `,
})
export class LucideDribbble {}
