import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBox],svg[lucide-box]',
  host: {
    class: 'lucide lucide-box',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
    />
    <svg:path d="m3.3 7 8.7 5 8.7-5" />
    <svg:path d="M12 22V12" />
  `,
})
export class LucideBox {}
