import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArrowBigLeftDash],svg[lucide-arrow-big-left-dash]',
  host: {
    class: 'lucide lucide-arrow-big-left-dash',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M19 15V9" />
    <svg:path d="M15 15h-3v4l-7-7 7-7v4h3v6z" />
  `,
})
export class LucideArrowBigLeftDash {}
