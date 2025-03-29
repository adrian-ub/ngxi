import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCreditCard],svg[lucide-credit-card]',
  host: {
    class: 'lucide lucide-credit-card',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="20" height="14" x="2" y="5" rx="2" />
    <svg:line x1="2" x2="22" y1="10" y2="10" />
  `,
})
export class LucideCreditCard {}
