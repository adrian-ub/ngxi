import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCopyX],svg[lucide-copy-x]',
  host: {
    class: 'lucide lucide-copy-x',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:line x1="12" x2="18" y1="12" y2="18" />
    <svg:line x1="12" x2="18" y1="18" y2="12" />
    <svg:rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <svg:path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  `,
})
export class LucideCopyX {}
