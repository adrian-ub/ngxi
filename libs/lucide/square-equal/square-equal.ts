import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSquareEqual],svg[lucide-square-equal]',
  host: {
    class: 'lucide lucide-square-equal',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" />
    <svg:path d="M7 10h10" />
    <svg:path d="M7 14h10" />
  `,
})
export class LucideSquareEqual {}
