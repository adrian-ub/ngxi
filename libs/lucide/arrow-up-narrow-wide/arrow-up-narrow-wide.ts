import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArrowUpNarrowWide],svg[lucide-arrow-up-narrow-wide]',
  host: {
    class: 'lucide lucide-arrow-up-narrow-wide',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="m3 8 4-4 4 4" />
    <svg:path d="M7 4v16" />
    <svg:path d="M11 12h4" />
    <svg:path d="M11 16h7" />
    <svg:path d="M11 20h10" />
  `,
})
export class LucideArrowUpNarrowWide {}
