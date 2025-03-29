import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTablet],svg[lucide-tablet]',
  host: {
    class: 'lucide lucide-tablet',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
    <svg:line x1="12" x2="12.01" y1="18" y2="18" />
  `,
})
export class LucideTablet {}
