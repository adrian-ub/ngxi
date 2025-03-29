import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePopsicle],svg[lucide-popsicle]',
  host: {
    class: 'lucide lucide-popsicle',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z"
    />
    <svg:path d="m22 22-5.5-5.5" />
  `,
})
export class LucidePopsicle {}
