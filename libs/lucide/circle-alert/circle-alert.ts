import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCircleAlert],svg[lucide-circle-alert]',
  host: {
    class: 'lucide lucide-circle-alert',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="10" />
    <svg:line x1="12" x2="12" y1="8" y2="12" />
    <svg:line x1="12" x2="12.01" y1="16" y2="16" />
  `,
})
export class LucideCircleAlert {}
