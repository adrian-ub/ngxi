import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTouchpadOff],svg[lucide-touchpad-off]',
  host: {
    class: 'lucide lucide-touchpad-off',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16" />
    <svg:path d="M2 14h12" />
    <svg:path d="M22 14h-2" />
    <svg:path d="M12 20v-6" />
    <svg:path d="m2 2 20 20" />
    <svg:path d="M22 16V6a2 2 0 0 0-2-2H10" />
  `,
})
export class LucideTouchpadOff {}
