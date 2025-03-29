import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLampDesk],svg[lucide-lamp-desk]',
  host: {
    class: 'lucide lucide-lamp-desk',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m14 5-3 3 2 7 8-8-7-2Z" />
    <svg:path d="m14 5-3 3-3-3 3-3 3 3Z" />
    <svg:path d="M9.5 6.5 4 12l3 6" />
    <svg:path d="M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z" />
  `,
})
export class LucideLampDesk {}
