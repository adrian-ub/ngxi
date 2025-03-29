import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMessageCircleCode],svg[lucide-message-circle-code]',
  host: {
    class: 'lucide lucide-message-circle-code',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M10 9.5 8 12l2 2.5" />
    <svg:path d="m14 9.5 2 2.5-2 2.5" />
    <svg:path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z" />
  `,
})
export class LucideMessageCircleCode {}
