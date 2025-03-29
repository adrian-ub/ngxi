import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCurrency],svg[lucide-currency]',
  host: {
    class: 'lucide lucide-currency',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="8" />
    <svg:line x1="3" x2="6" y1="3" y2="6" />
    <svg:line x1="21" x2="18" y1="3" y2="6" />
    <svg:line x1="3" x2="6" y1="21" y2="18" />
    <svg:line x1="21" x2="18" y1="21" y2="18" />
  `,
})
export class LucideCurrency {}
