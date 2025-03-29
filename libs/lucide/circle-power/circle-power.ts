import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCirclePower],svg[lucide-circle-power]',
  host: {
    class: 'lucide lucide-circle-power',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 7v4" />
    <svg:path d="M7.998 9.003a5 5 0 1 0 8-.005" />
    <svg:circle cx="12" cy="12" r="10" />
  `,
})
export class LucideCirclePower {}
