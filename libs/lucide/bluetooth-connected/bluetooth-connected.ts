import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBluetoothConnected],svg[lucide-bluetooth-connected]',
  host: {
    class: 'lucide lucide-bluetooth-connected',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m7 7 10 10-5 5V2l5 5L7 17" />
    <svg:line x1="18" x2="21" y1="12" y2="12" />
    <svg:line x1="3" x2="6" y1="12" y2="12" />
  `,
})
export class LucideBluetoothConnected {}
