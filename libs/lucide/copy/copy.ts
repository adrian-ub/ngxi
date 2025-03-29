import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCopy],svg[lucide-copy]',
  host: {
    class: 'lucide lucide-copy',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <svg:path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  `,
})
export class LucideCopy {}
