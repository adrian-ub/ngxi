import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideListChecks],svg[lucide-list-checks]',
  host: {
    class: 'lucide lucide-list-checks',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m3 17 2 2 4-4" />
    <svg:path d="m3 7 2 2 4-4" />
    <svg:path d="M13 6h8" />
    <svg:path d="M13 12h8" />
    <svg:path d="M13 18h8" />
  `,
})
export class LucideListChecks {}
