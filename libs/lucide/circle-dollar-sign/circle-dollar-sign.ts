import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCircleDollarSign],svg[lucide-circle-dollar-sign]',
  host: {
    class: 'lucide lucide-circle-dollar-sign',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="10" />
    <svg:path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
    <svg:path d="M12 18V6" />
  `,
})
export class LucideCircleDollarSign {}
