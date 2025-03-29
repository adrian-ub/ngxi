import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMusic4],svg[lucide-music-4]',
  host: {
    class: 'lucide lucide-music-4',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M9 18V5l12-2v13" />
    <svg:path d="m9 9 12-2" />
    <svg:circle cx="6" cy="18" r="3" />
    <svg:circle cx="18" cy="16" r="3" />
  `,
})
export class LucideMusic4 {}
