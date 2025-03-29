import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCopyCheck],svg[lucide-copy-check]',
  host: {
    class: 'lucide lucide-copy-check',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m12 15 2 2 4-4" />
    <svg:rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <svg:path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  `,
})
export class LucideCopyCheck {}
