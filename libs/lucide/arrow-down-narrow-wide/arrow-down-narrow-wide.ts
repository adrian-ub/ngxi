import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArrowDownNarrowWide],svg[lucide-arrow-down-narrow-wide]',
  host: {
    class: 'lucide lucide-arrow-down-narrow-wide',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m3 16 4 4 4-4" />
    <svg:path d="M7 20V4" />
    <svg:path d="M11 4h4" />
    <svg:path d="M11 8h7" />
    <svg:path d="M11 12h10" />
  `,
})
export class LucideArrowDownNarrowWide {}
