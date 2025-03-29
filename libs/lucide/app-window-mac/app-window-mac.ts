import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAppWindowMac],svg[lucide-app-window-mac]',
  host: {
    class: 'lucide lucide-app-window-mac',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="20" height="16" x="2" y="4" rx="2" />
    <svg:path d="M6 8h.01" />
    <svg:path d="M10 8h.01" />
    <svg:path d="M14 8h.01" />
  `,
})
export class LucideAppWindowMac {}
