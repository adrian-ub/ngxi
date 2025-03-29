import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideShoppingBag],svg[lucide-shopping-bag]',
  host: {
    class: 'lucide lucide-shopping-bag',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <svg:path d="M3 6h18" />
    <svg:path d="M16 10a4 4 0 0 1-8 0" />
  `,
})
export class LucideShoppingBag {}
