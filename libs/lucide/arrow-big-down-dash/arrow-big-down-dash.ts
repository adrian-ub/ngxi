import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArrowBigDownDash],svg[lucide-arrow-big-down-dash]',
  host: {
    class: 'lucide lucide-arrow-big-down-dash',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M15 5H9" />
    <svg:path d="M15 9v3h4l-7 7-7-7h4V9z" />
  `,
})
export class LucideArrowBigDownDash {}
