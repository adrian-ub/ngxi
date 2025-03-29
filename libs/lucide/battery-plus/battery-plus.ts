import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBatteryPlus],svg[lucide-battery-plus]',
  host: {
    class: 'lucide lucide-battery-plus',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M10 9v6" />
    <svg:path d="M13.5 7H16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2.5" />
    <svg:path d="M22 11v2" />
    <svg:path d="M6.5 17H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2.5" />
    <svg:path d="M7 12h6" />
  `,
})
export class LucideBatteryPlus {}
