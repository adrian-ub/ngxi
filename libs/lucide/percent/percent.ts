import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePercent],svg[lucide-percent]',
  host: {
    class: 'lucide lucide-percent',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:line x1="19" x2="5" y1="5" y2="19" />
    <svg:circle cx="6.5" cy="6.5" r="2.5" />
    <svg:circle cx="17.5" cy="17.5" r="2.5" />
  `,
})
export class LucidePercent {}
