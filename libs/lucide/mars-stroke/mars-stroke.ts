import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMarsStroke],svg[lucide-mars-stroke]',
  host: {
    class: 'lucide lucide-mars-stroke',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m14 6 4 4" />
    <svg:path d="M17 3h4v4" />
    <svg:path d="m21 3-7.75 7.75" />
    <svg:circle cx="9" cy="15" r="6" />
  `,
})
export class LucideMarsStroke {}
