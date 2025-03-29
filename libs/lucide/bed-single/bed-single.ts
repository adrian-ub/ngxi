import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBedSingle],svg[lucide-bed-single]',
  host: {
    class: 'lucide lucide-bed-single',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8" />
    <svg:path d="M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" />
    <svg:path d="M3 18h18" />
  `,
})
export class LucideBedSingle {}
