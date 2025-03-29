import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBedDouble],svg[lucide-bed-double]',
  host: {
    class: 'lucide lucide-bed-double',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" />
    <svg:path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
    <svg:path d="M12 4v6" />
    <svg:path d="M2 18h20" />
  `,
})
export class LucideBedDouble {}
