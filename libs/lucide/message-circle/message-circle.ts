import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMessageCircle],svg[lucide-message-circle]',
  host: {
    class: 'lucide lucide-message-circle',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: ` <svg:path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /> `,
})
export class LucideMessageCircle {}
