import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLightbulbOff],svg[lucide-lightbulb-off]',
  host: {
    class: 'lucide lucide-lightbulb-off',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5" />
    <svg:path d="m2 2 20 20" />
    <svg:path d="M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5" />
    <svg:path d="M9 18h6" />
    <svg:path d="M10 22h4" />
  `,
})
export class LucideLightbulbOff {}
