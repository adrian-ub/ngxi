import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePopcorn],svg[lucide-popcorn]',
  host: {
    class: 'lucide lucide-popcorn',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4"
    />
    <svg:path d="M10 22 9 8" />
    <svg:path d="m14 22 1-14" />
    <svg:path
      d="M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z"
    />
  `,
})
export class LucidePopcorn {}
