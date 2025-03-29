import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSquareStack],svg[lucide-square-stack]',
  host: {
    class: 'lucide lucide-square-stack',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" />
    <svg:path d="M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" />
    <svg:rect width="8" height="8" x="14" y="14" rx="2" />
  `,
})
export class LucideSquareStack {}
