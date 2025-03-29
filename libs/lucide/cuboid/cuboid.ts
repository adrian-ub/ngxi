import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCuboid],svg[lucide-cuboid]',
  host: {
    class: 'lucide lucide-cuboid',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z"
    />
    <svg:path d="M10 22v-8L2.25 9.15" />
    <svg:path d="m10 14 11.77-6.87" />
  `,
})
export class LucideCuboid {}
