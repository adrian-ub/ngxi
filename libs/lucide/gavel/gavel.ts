import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGavel],svg[lucide-gavel]',
  host: {
    class: 'lucide lucide-gavel',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8" />
    <svg:path d="m16 16 6-6" />
    <svg:path d="m8 8 6-6" />
    <svg:path d="m9 7 8 8" />
    <svg:path d="m21 11-8-8" />
  `,
})
export class LucideGavel {}
