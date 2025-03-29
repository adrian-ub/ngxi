import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCircleStop],svg[lucide-circle-stop]',
  host: {
    class: 'lucide lucide-circle-stop',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:circle cx="12" cy="12" r="10" />
    <svg:rect x="9" y="9" width="6" height="6" rx="1" />
  `,
})
export class LucideCircleStop {}
