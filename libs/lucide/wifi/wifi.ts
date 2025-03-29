import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideWifi],svg[lucide-wifi]',
  host: {
    class: 'lucide lucide-wifi',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 20h.01" />
    <svg:path d="M2 8.82a15 15 0 0 1 20 0" />
    <svg:path d="M5 12.859a10 10 0 0 1 14 0" />
    <svg:path d="M8.5 16.429a5 5 0 0 1 7 0" />
  `,
})
export class LucideWifi {}
