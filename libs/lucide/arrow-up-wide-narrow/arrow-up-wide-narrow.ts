import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArrowUpWideNarrow],svg[lucide-arrow-up-wide-narrow]',
  host: {
    class: 'lucide lucide-arrow-up-wide-narrow',
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
    <svg:path d="M11 12h10" />
    <svg:path d="M11 16h7" />
    <svg:path d="M11 20h4" />
  `,
})
export class LucideArrowUpWideNarrow {}
