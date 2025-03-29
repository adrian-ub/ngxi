import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCircleEqual],svg[lucide-circle-equal]',
  host: {
    class: 'lucide lucide-circle-equal',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M7 10h10" />
    <svg:path d="M7 14h10" />
    <svg:circle cx="12" cy="12" r="10" />
  `,
})
export class LucideCircleEqual {}
