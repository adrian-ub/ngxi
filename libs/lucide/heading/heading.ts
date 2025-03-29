import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideHeading],svg[lucide-heading]',
  host: {
    class: 'lucide lucide-heading',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M6 12h12" />
    <svg:path d="M6 20V4" />
    <svg:path d="M18 20V4" />
  `,
})
export class LucideHeading {}
