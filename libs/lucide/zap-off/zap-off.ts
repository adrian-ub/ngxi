import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideZapOff],svg[lucide-zap-off]',
  host: {
    class: 'lucide lucide-zap-off',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317" />
    <svg:path d="M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773" />
    <svg:path
      d="M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643"
    />
    <svg:path d="m2 2 20 20" />
  `,
})
export class LucideZapOff {}
