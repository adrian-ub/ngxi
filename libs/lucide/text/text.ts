import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideText],svg[lucide-text]',
  host: {
    class: 'lucide lucide-text',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M17 6.1H3" />
    <svg:path d="M21 12.1H3" />
    <svg:path d="M15.1 18H3" />
  `,
})
export class LucideText {}
