import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArrowDownWideNarrow],svg[lucide-arrow-down-wide-narrow]',
  host: {
    class: 'lucide lucide-arrow-down-wide-narrow',
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
    <svg:path d="M11 4h10" />
    <svg:path d="M11 8h7" />
    <svg:path d="M11 12h4" />
  `,
})
export class LucideArrowDownWideNarrow {}
