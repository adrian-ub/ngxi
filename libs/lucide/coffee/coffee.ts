import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCoffee],svg[lucide-coffee]',
  host: {
    class: 'lucide lucide-coffee',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M10 2v2" />
    <svg:path d="M14 2v2" />
    <svg:path
      d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"
    />
    <svg:path d="M6 2v2" />
  `,
})
export class LucideCoffee {}
