import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector:
    'svg[lucideMessageCircleWarning],svg[lucide-message-circle-warning]',
  host: {
    class: 'lucide lucide-message-circle-warning',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    <svg:path d="M12 8v4" />
    <svg:path d="M12 16h.01" />
  `,
})
export class LucideMessageCircleWarning {}
