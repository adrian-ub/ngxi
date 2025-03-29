import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideDivide],svg[lucide-divide]',
  host: {
    class: 'lucide lucide-divide',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="6" r="1" />
    <svg:line x1="5" x2="19" y1="12" y2="12" />
    <svg:circle cx="12" cy="18" r="1" />
  `,
})
export class LucideDivide {}
