import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideToggleLeft],svg[lucide-toggle-left]',
  host: {
    class: 'lucide lucide-toggle-left',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="20" height="12" x="2" y="6" rx="6" ry="6" />
    <svg:circle cx="8" cy="12" r="2" />
  `,
})
export class LucideToggleLeft {}
