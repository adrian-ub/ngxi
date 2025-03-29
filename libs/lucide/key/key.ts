import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideKey],svg[lucide-key]',
  host: {
    class: 'lucide lucide-key',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"
    />
    <svg:path d="m21 2-9.6 9.6" />
    <svg:circle cx="7.5" cy="15.5" r="5.5" />
  `,
})
export class LucideKey {}
