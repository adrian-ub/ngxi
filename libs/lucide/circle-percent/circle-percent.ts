import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCirclePercent],svg[lucide-circle-percent]',
  host: {
    class: 'lucide lucide-circle-percent',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="10" />
    <svg:path d="m15 9-6 6" />
    <svg:path d="M9 9h.01" />
    <svg:path d="M15 15h.01" />
  `,
})
export class LucideCirclePercent {}
