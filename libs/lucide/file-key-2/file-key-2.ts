import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFileKey2],svg[lucide-file-key-2]',
  host: {
    class: 'lucide lucide-file-key-2',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6" />
    <svg:path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <svg:circle cx="4" cy="16" r="2" />
    <svg:path d="m10 10-4.5 4.5" />
    <svg:path d="m9 11 1 1" />
  `,
})
export class LucideFileKey2 {}
