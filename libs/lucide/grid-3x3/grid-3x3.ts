import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGrid3x3],svg[lucide-grid-3x3]',
  host: {
    class: 'lucide lucide-grid-3x3',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" />
    <svg:path d="M3 9h18" />
    <svg:path d="M3 15h18" />
    <svg:path d="M9 3v18" />
    <svg:path d="M15 3v18" />
  `,
})
export class LucideGrid3x3 {}
