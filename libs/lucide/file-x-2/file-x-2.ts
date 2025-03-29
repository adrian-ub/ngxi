import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFileX2],svg[lucide-file-x-2]',
  host: {
    class: 'lucide lucide-file-x-2',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" />
    <svg:path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <svg:path d="m8 12.5-5 5" />
    <svg:path d="m3 12.5 5 5" />
  `,
})
export class LucideFileX2 {}
