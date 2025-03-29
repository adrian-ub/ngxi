import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideEye],svg[lucide-eye]',
  host: {
    class: 'lucide lucide-eye',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
    />
    <svg:circle cx="12" cy="12" r="3" />
  `,
})
export class LucideEye {}
