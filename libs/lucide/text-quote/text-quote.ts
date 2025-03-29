import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTextQuote],svg[lucide-text-quote]',
  host: {
    class: 'lucide lucide-text-quote',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M17 6H3" />
    <svg:path d="M21 12H8" />
    <svg:path d="M21 18H8" />
    <svg:path d="M3 12v6" />
  `,
})
export class LucideTextQuote {}
