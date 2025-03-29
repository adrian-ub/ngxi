import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFerrisWheel],svg[lucide-ferris-wheel]',
  host: {
    class: 'lucide lucide-ferris-wheel',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="2" />
    <svg:path d="M12 2v4" />
    <svg:path d="m6.8 15-3.5 2" />
    <svg:path d="m20.7 7-3.5 2" />
    <svg:path d="M6.8 9 3.3 7" />
    <svg:path d="m20.7 17-3.5-2" />
    <svg:path d="m9 22 3-8 3 8" />
    <svg:path d="M8 22h8" />
    <svg:path d="M18 18.7a9 9 0 1 0-12 0" />
  `,
})
export class LucideFerrisWheel {}
