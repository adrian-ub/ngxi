import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLigature],svg[lucide-ligature]',
  host: {
    class: 'lucide lucide-ligature',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2" />
    <svg:path d="M6 12h4" />
    <svg:path d="M14 12h2v8" />
    <svg:path d="M6 20h4" />
    <svg:path d="M14 20h4" />
  `,
})
export class LucideLigature {}
