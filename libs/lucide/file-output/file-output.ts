import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFileOutput],svg[lucide-file-output]',
  host: {
    class: 'lucide lucide-file-output',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <svg:path d="M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2" />
    <svg:path d="M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6" />
    <svg:path d="m5 11-3 3" />
    <svg:path d="m5 17-3-3h10" />
  `,
})
export class LucideFileOutput {}
