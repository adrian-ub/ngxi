import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLandPlot],svg[lucide-land-plot]',
  host: {
    class: 'lucide lucide-land-plot',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m12 8 6-3-6-3v10" />
    <svg:path
      d="m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12"
    />
    <svg:path d="m6.49 12.85 11.02 6.3" />
    <svg:path d="M17.51 12.85 6.5 19.15" />
  `,
})
export class LucideLandPlot {}
