import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCirclePlay],svg[lucide-circle-play]',
  host: {
    class: 'lucide lucide-circle-play',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="10" />
    <svg:polygon points="10 8 16 12 10 16 10 8" />
  `,
})
export class LucideCirclePlay {}
