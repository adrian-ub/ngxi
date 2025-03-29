import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTornado],svg[lucide-tornado]',
  host: {
    class: 'lucide lucide-tornado',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M21 4H3" />
    <svg:path d="M18 8H6" />
    <svg:path d="M19 12H9" />
    <svg:path d="M16 16h-6" />
    <svg:path d="M11 20H9" />
  `,
})
export class LucideTornado {}
