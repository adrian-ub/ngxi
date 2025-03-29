import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePrinter],svg[lucide-printer]',
  host: {
    class: 'lucide lucide-printer',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
    />
    <svg:path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />
    <svg:rect x="6" y="14" width="12" height="8" rx="1" />
  `,
})
export class LucidePrinter {}
