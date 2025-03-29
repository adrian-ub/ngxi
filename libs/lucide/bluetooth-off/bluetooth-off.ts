import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBluetoothOff],svg[lucide-bluetooth-off]',
  host: {
    class: 'lucide lucide-bluetooth-off',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m17 17-5 5V12l-5 5" />
    <svg:path d="m2 2 20 20" />
    <svg:path d="M14.5 9.5 17 7l-5-5v4.5" />
  `,
})
export class LucideBluetoothOff {}
