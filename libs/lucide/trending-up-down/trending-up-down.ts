import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTrendingUpDown],svg[lucide-trending-up-down]',
  host: {
    class: 'lucide lucide-trending-up-down',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M14.828 14.828 21 21" />
    <svg:path d="M21 16v5h-5" />
    <svg:path d="m21 3-9 9-4-4-6 6" />
    <svg:path d="M21 8V3h-5" />
  `,
})
export class LucideTrendingUpDown {}
