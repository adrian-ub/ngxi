import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMusic2],svg[lucide-music-2]',
  host: {
    class: 'lucide lucide-music-2',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="8" cy="18" r="4" />
    <svg:path d="M12 18V2l7 4" />
  `,
})
export class LucideMusic2 {}
