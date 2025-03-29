import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideServer],svg[lucide-server]',
  host: {
    class: 'lucide lucide-server',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
    <svg:rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
    <svg:line x1="6" x2="6.01" y1="6" y2="6" />
    <svg:line x1="6" x2="6.01" y1="18" y2="18" />
  `,
})
export class LucideServer {}
