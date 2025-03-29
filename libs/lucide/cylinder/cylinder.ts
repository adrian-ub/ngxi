import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCylinder],svg[lucide-cylinder]',
  host: {
    class: 'lucide lucide-cylinder',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:ellipse cx="12" cy="5" rx="9" ry="3" />
    <svg:path d="M3 5v14a9 3 0 0 0 18 0V5" />
  `,
})
export class LucideCylinder {}
