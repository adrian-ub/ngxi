import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMessageCirclePlus],svg[lucide-message-circle-plus]',
  host: {
    class: 'lucide lucide-message-circle-plus',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    <svg:path d="M8 12h8" />
    <svg:path d="M12 8v8" />
  `,
})
export class LucideMessageCirclePlus {}
