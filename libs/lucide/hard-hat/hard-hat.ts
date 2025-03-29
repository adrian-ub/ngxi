import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideHardHat],svg[lucide-hard-hat]',
  host: {
    class: 'lucide lucide-hard-hat',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
    <svg:path d="M14 6a6 6 0 0 1 6 6v3" />
    <svg:path d="M4 15v-3a6 6 0 0 1 6-6" />
    <svg:rect x="2" y="15" width="20" height="4" rx="1" />
  `,
})
export class LucideHardHat {}
