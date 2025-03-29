import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSpline],svg[lucide-spline]',
  host: {
    class: 'lucide lucide-spline',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="19" cy="5" r="2" />
    <svg:circle cx="5" cy="19" r="2" />
    <svg:path d="M5 17A12 12 0 0 1 17 5" />
  `,
})
export class LucideSpline {}
