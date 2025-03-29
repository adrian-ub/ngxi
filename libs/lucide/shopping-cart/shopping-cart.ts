import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideShoppingCart],svg[lucide-shopping-cart]',
  host: {
    class: 'lucide lucide-shopping-cart',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="8" cy="21" r="1" />
    <svg:circle cx="19" cy="21" r="1" />
    <svg:path
      d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
    />
  `,
})
export class LucideShoppingCart {}
