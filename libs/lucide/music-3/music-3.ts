import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMusic3],svg[lucide-music-3]',
  host: {
    class: 'lucide lucide-music-3',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="18" r="4" />
    <svg:path d="M16 18V2" />
  `,
})
export class LucideMusic3 {}
