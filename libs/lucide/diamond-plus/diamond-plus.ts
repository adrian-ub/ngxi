import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideDiamondPlus],svg[lucide-diamond-plus]',
  host: {
    class: 'lucide lucide-diamond-plus',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 8v8" />
    <svg:path
      d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"
    />
    <svg:path d="M8 12h8" />
  `,
})
export class LucideDiamondPlus {}
