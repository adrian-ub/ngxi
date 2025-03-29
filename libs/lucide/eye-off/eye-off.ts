import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideEyeOff],svg[lucide-eye-off]',
  host: {
    class: 'lucide lucide-eye-off',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"
    />
    <svg:path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
    <svg:path
      d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"
    />
    <svg:path d="m2 2 20 20" />
  `,
})
export class LucideEyeOff {}
