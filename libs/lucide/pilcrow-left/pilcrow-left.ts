import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePilcrowLeft],svg[lucide-pilcrow-left]',
  host: {
    class: 'lucide lucide-pilcrow-left',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M14 3v11" />
    <svg:path d="M14 9h-3a3 3 0 0 1 0-6h9" />
    <svg:path d="M18 3v11" />
    <svg:path d="M22 18H2l4-4" />
    <svg:path d="m6 22-4-4" />
  `,
})
export class LucidePilcrowLeft {}
