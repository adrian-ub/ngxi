import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSignalZero],svg[lucide-signal-zero]',
  host: {
    class: 'lucide lucide-signal-zero',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: ` <svg:path d="M2 20h.01" /> `,
})
export class LucideSignalZero {}
