import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideVibrateOff],svg[lucide-vibrate-off]',
  host: {
    class: 'lucide lucide-vibrate-off',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m2 8 2 2-2 2 2 2-2 2" />
    <svg:path d="m22 8-2 2 2 2-2 2 2 2" />
    <svg:path d="M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2" />
    <svg:path d="M16 10.34V6c0-.55-.45-1-1-1h-4.34" />
    <svg:line x1="2" x2="22" y1="2" y2="22" />
  `,
})
export class LucideVibrateOff {}
