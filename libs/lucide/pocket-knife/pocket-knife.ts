import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePocketKnife],svg[lucide-pocket-knife]',
  host: {
    class: 'lucide lucide-pocket-knife',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2" />
    <svg:path d="M18 6h.01" />
    <svg:path d="M6 18h.01" />
    <svg:path d="M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z" />
    <svg:path d="M18 11.66V22a4 4 0 0 0 4-4V6" />
  `,
})
export class LucidePocketKnife {}
