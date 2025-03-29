import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideDock],svg[lucide-dock]',
  host: {
    class: 'lucide lucide-dock',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M2 8h20" />
    <svg:rect width="20" height="16" x="2" y="4" rx="2" />
    <svg:path d="M6 16h12" />
  `,
})
export class LucideDock {}
