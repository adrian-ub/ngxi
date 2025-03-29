import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSquareDivide],svg[lucide-square-divide]',
  host: {
    class: 'lucide lucide-square-divide',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <svg:line x1="8" x2="16" y1="12" y2="12" />
    <svg:line x1="12" x2="12" y1="16" y2="16" />
    <svg:line x1="12" x2="12" y1="8" y2="8" />
  `,
})
export class LucideSquareDivide {}
