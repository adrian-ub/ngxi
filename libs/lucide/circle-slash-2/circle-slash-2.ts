import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCircleSlash2],svg[lucide-circle-slash-2]',
  host: {
    class: 'lucide lucide-circle-slash-2',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M22 2 2 22" />
    <svg:circle cx="12" cy="12" r="10" />
  `,
})
export class LucideCircleSlash2 {}
