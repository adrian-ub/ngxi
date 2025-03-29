import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBattery],svg[lucide-battery]',
  host: {
    class: 'lucide lucide-battery',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="16" height="10" x="2" y="7" rx="2" ry="2" />
    <svg:line x1="22" x2="22" y1="11" y2="13" />
  `,
})
export class LucideBattery {}
