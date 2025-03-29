import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCirclePause],svg[lucide-circle-pause]',
  host: {
    class: 'lucide lucide-circle-pause',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="10" />
    <svg:line x1="10" x2="10" y1="15" y2="9" />
    <svg:line x1="14" x2="14" y1="15" y2="9" />
  `,
})
export class LucideCirclePause {}
