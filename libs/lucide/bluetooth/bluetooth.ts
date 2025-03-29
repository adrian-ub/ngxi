import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBluetooth],svg[lucide-bluetooth]',
  host: {
    class: 'lucide lucide-bluetooth',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: ` <svg:path d="m7 7 10 10-5 5V2l5 5L7 17" /> `,
})
export class LucideBluetooth {}
