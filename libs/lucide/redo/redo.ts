import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRedo],svg[lucide-redo]',
  host: {
    class: 'lucide lucide-redo',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M21 7v6h-6" />
    <svg:path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
  `,
})
export class LucideRedo {}
