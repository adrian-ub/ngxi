import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideAlignHorizontalSpaceAround],svg[lucide-align-horizontal-space-around]',
  host: {
    class: 'lucide lucide-align-horizontal-space-around',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="6" height="10" x="9" y="7" rx="2" />
    <svg:path d="M4 22V2" />
    <svg:path d="M20 22V2" />
  `,
})
export class LucideAlignHorizontalSpaceAround {}
