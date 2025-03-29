import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSatelliteDish],svg[lucide-satellite-dish]',
  host: {
    class: 'lucide lucide-satellite-dish',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M4 10a7.31 7.31 0 0 0 10 10Z" />
    <svg:path d="m9 15 3-3" />
    <svg:path d="M17 13a6 6 0 0 0-6-6" />
    <svg:path d="M21 13A10 10 0 0 0 11 3" />
  `,
})
export class LucideSatelliteDish {}
