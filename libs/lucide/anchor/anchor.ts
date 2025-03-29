import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAnchor],svg[lucide-anchor]',
  host: {
    class: 'lucide lucide-anchor',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 22V8" />
    <svg:path d="M5 12H2a10 10 0 0 0 20 0h-3" />
    <svg:circle cx="12" cy="5" r="3" />
  `,
})
export class LucideAnchor {}
