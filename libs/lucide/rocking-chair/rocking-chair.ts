import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRockingChair],svg[lucide-rocking-chair]',
  host: {
    class: 'lucide lucide-rocking-chair',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:polyline points="3.5 2 6.5 12.5 18 12.5" />
    <svg:line x1="9.5" x2="5.5" y1="12.5" y2="20" />
    <svg:line x1="15" x2="18.5" y1="12.5" y2="20" />
    <svg:path d="M2.75 18a13 13 0 0 0 18.5 0" />
  `,
})
export class LucideRockingChair {}
