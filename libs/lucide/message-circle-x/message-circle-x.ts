import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMessageCircleX],svg[lucide-message-circle-x]',
  host: {
    class: 'lucide lucide-message-circle-x',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    <svg:path d="m15 9-6 6" />
    <svg:path d="m9 9 6 6" />
  `,
})
export class LucideMessageCircleX {}
