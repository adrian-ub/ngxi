import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBaseline],svg[lucide-baseline]',
  host: {
    class: 'lucide lucide-baseline',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M4 20h16" />
    <svg:path d="m6 16 6-12 6 12" />
    <svg:path d="M8 12h8" />
  `,
})
export class LucideBaseline {}
