import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLollipop],svg[lucide-lollipop]',
  host: {
    class: 'lucide lucide-lollipop',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="11" cy="11" r="8" />
    <svg:path d="m21 21-4.3-4.3" />
    <svg:path d="M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0" />
  `,
})
export class LucideLollipop {}
