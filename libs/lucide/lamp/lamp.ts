import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLamp],svg[lucide-lamp]',
  host: {
    class: 'lucide lucide-lamp',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M8 2h8l4 10H4L8 2Z" />
    <svg:path d="M12 12v6" />
    <svg:path d="M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z" />
  `,
})
export class LucideLamp {}
