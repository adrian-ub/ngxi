import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBluetoothSearching],svg[lucide-bluetooth-searching]',
  host: {
    class: 'lucide lucide-bluetooth-searching',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m7 7 10 10-5 5V2l5 5L7 17" />
    <svg:path d="M20.83 14.83a4 4 0 0 0 0-5.66" />
    <svg:path d="M18 12h.01" />
  `,
})
export class LucideBluetoothSearching {}
