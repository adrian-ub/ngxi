import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePcCase],svg[lucide-pc-case]',
  host: {
    class: 'lucide lucide-pc-case',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:rect width="14" height="20" x="5" y="2" rx="2" />
    <svg:path d="M15 14h.01" />
    <svg:path d="M9 6h6" />
    <svg:path d="M9 10h6" />
  `,
})
export class LucidePcCase {}
