import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCrosshair],svg[lucide-crosshair]',
  host: {
    class: 'lucide lucide-crosshair',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="10" />
    <svg:line x1="22" x2="18" y1="12" y2="12" />
    <svg:line x1="6" x2="2" y1="12" y2="12" />
    <svg:line x1="12" x2="12" y1="6" y2="2" />
    <svg:line x1="12" x2="12" y1="22" y2="18" />
  `,
})
export class LucideCrosshair {}
