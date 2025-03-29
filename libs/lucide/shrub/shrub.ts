import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideShrub],svg[lucide-shrub]',
  host: {
    class: 'lucide lucide-shrub',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 22v-7l-2-2" />
    <svg:path
      d="M17 8v.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0Z"
    />
    <svg:path d="m14 14-2 2" />
  `,
})
export class LucideShrub {}
