import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBatteryWarning],svg[lucide-battery-warning]',
  host: {
    class: 'lucide lucide-battery-warning',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M10 17h.01" />
    <svg:path d="M10 7v6" />
    <svg:path d="M14 7h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" />
    <svg:path d="M22 11v2" />
    <svg:path d="M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
  `,
})
export class LucideBatteryWarning {}
