import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideUnlink2],svg[lucide-unlink-2]',
  host: {
    class: 'lucide lucide-unlink-2',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2" />
  `,
})
export class LucideUnlink2 {}
