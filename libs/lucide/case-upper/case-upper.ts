import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCaseUpper],svg[lucide-case-upper]',
  host: {
    class: 'lucide lucide-case-upper',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m3 15 4-8 4 8" />
    <svg:path d="M4 13h6" />
    <svg:path d="M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4" />
  `,
})
export class LucideCaseUpper {}
