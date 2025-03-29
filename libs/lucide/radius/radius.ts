import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRadius],svg[lucide-radius]',
  host: {
    class: 'lucide lucide-radius',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M20.34 17.52a10 10 0 1 0-2.82 2.82" />
    <svg:circle cx="19" cy="19" r="2" />
    <svg:path d="m13.41 13.41 4.18 4.18" />
    <svg:circle cx="12" cy="12" r="2" />
  `,
})
export class LucideRadius {}
