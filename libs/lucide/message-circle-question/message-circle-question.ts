import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideMessageCircleQuestion],svg[lucide-message-circle-question]',
  host: {
    class: 'lucide lucide-message-circle-question',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    <svg:path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <svg:path d="M12 17h.01" />
  `,
})
export class LucideMessageCircleQuestion {}
