import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideWifiZero],svg[lucide-wifi-zero]',
  host: {
    class: 'lucide lucide-wifi-zero',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: ` <svg:path d="M12 20h.01" /> `,
})
export class LucideWifiZero {}
