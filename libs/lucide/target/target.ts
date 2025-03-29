import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTarget],svg[lucide-target]',
  host: {
    class: 'lucide lucide-target',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="10" />
    <svg:circle cx="12" cy="12" r="6" />
    <svg:circle cx="12" cy="12" r="2" />
  `,
})
export class LucideTarget {}
