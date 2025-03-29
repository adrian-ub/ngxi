import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRegex],svg[lucide-regex]',
  host: {
    class: 'lucide lucide-regex',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M17 3v10" />
    <svg:path d="m12.67 5.5 8.66 5" />
    <svg:path d="m12.67 10.5 8.66-5" />
    <svg:path
      d="M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z"
    />
  `,
})
export class LucideRegex {}
