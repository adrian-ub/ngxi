import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideScale],svg[lucide-scale]',
  host: {
    class: 'lucide lucide-scale',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
    <svg:path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
    <svg:path d="M7 21h10" />
    <svg:path d="M12 3v18" />
    <svg:path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
  `,
})
export class LucideScale {}
