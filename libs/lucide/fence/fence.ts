import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFence],svg[lucide-fence]',
  host: {
    class: 'lucide lucide-fence',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" />
    <svg:path d="M6 8h4" />
    <svg:path d="M6 18h4" />
    <svg:path d="m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" />
    <svg:path d="M14 8h4" />
    <svg:path d="M14 18h4" />
    <svg:path d="m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" />
  `,
})
export class LucideFence {}
