import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideDessert],svg[lucide-dessert]',
  host: {
    class: 'lucide lucide-dessert',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="4" r="2" />
    <svg:path
      d="M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8"
    />
    <svg:path d="M3.2 14.8a9 9 0 0 0 17.6 0" />
  `,
})
export class LucideDessert {}
