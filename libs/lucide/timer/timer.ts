import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTimer],svg[lucide-timer]',
  host: {
    class: 'lucide lucide-timer',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:line x1="10" x2="14" y1="2" y2="2" />
    <svg:line x1="12" x2="15" y1="14" y2="11" />
    <svg:circle cx="12" cy="14" r="8" />
  `,
})
export class LucideTimer {}
