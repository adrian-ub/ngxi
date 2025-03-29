import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBath],svg[lucide-bath]',
  host: {
    class: 'lucide lucide-bath',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M10 4 8 6" />
    <svg:path d="M17 19v2" />
    <svg:path d="M2 12h20" />
    <svg:path d="M7 19v2" />
    <svg:path
      d="M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"
    />
  `,
})
export class LucideBath {}
