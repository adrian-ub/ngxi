import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePrinterCheck],svg[lucide-printer-check]',
  host: {
    class: 'lucide lucide-printer-check',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5"
    />
    <svg:path d="m16 19 2 2 4-4" />
    <svg:path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2" />
    <svg:path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />
  `,
})
export class LucidePrinterCheck {}
