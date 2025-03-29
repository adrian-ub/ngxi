import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCircleDivide],svg[lucide-circle-divide]',
  host: {
    class: 'lucide lucide-circle-divide',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:line x1="8" x2="16" y1="12" y2="12" />
    <svg:line x1="12" x2="12" y1="16" y2="16" />
    <svg:line x1="12" x2="12" y1="8" y2="8" />
    <svg:circle cx="12" cy="12" r="10" />
  `,
})
export class LucideCircleDivide {}
