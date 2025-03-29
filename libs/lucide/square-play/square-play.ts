import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSquarePlay],svg[lucide-square-play]',
  host: {
    class: 'lucide lucide-square-play',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" />
    <svg:path d="m9 8 6 4-6 4Z" />
  `,
})
export class LucideSquarePlay {}
