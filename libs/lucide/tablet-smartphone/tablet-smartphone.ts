import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTabletSmartphone],svg[lucide-tablet-smartphone]',
  host: {
    class: 'lucide lucide-tablet-smartphone',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="10" height="14" x="3" y="8" rx="2" />
    <svg:path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" />
    <svg:path d="M8 18h.01" />
  `,
})
export class LucideTabletSmartphone {}
