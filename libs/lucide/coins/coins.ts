import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCoins],svg[lucide-coins]',
  host: {
    class: 'lucide lucide-coins',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="8" cy="8" r="6" />
    <svg:path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
    <svg:path d="M7 6h1v4" />
    <svg:path d="m16.71 13.88.7.71-2.82 2.82" />
  `,
})
export class LucideCoins {}
