import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBatteryCharging],svg[lucide-battery-charging]',
  host: {
    class: 'lucide lucide-battery-charging',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" />
    <svg:path d="M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1" />
    <svg:path d="m11 7-3 5h4l-3 5" />
    <svg:line x1="22" x2="22" y1="11" y2="13" />
  `,
})
export class LucideBatteryCharging {}
