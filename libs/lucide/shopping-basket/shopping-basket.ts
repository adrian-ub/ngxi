import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideShoppingBasket],svg[lucide-shopping-basket]',
  host: {
    class: 'lucide lucide-shopping-basket',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m15 11-1 9" />
    <svg:path d="m19 11-4-7" />
    <svg:path d="M2 11h20" />
    <svg:path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" />
    <svg:path d="M4.5 15.5h15" />
    <svg:path d="m5 11 4-7" />
    <svg:path d="m9 11 1 9" />
  `,
})
export class LucideShoppingBasket {}
